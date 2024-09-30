import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 토큰 관리를 위한 함수들
const getToken = (): string | null => localStorage.getItem('token');
const setToken = (token: string): void => localStorage.setItem('token', token);
const removeToken = (): void => localStorage.removeItem('token');

// 토큰 관리를 위한 함수들
const getAccessToken = (): string | null => {
  const token = localStorage.getItem('token');
  console.log('Retrieved accessToken from localStorage:', token);
  return token;
};
const getRefreshToken = (): string | null => {
  const token = localStorage.getItem('refresh');
  console.log('Retrieved refreshToken from localStorage:', token);
  return token;
};

const setAccessToken = (token: string): void => {
  console.log('Saving accessToken to localStorage:', token);
  localStorage.setItem('accessToken', token);
};

const removeAccessToken = (): void => {
  console.log('Removing accessToken from localStorage');
  localStorage.removeItem('accessToken');
};

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // 백엔드 API 주소
  headers: { 'Content-Type': 'application/json' }, // 기본 헤더 설정
  withCredentials: true
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Request config before adding token:', config);

    // 로그인 요청에는 토큰을 추가하지 않음
    if (config.url === '/logout') {
      const token = getAccessToken();
      const refreshToken = getRefreshToken();
      if (token && refreshToken) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Added accessToken to request headers:', config.headers.Authorization);
        // Refresh Token을 쿠키에 추가
        config.headers.Cookie = `refresh ${refreshToken}`;
        console.log('Added refreshToken to request headers as cookie:', config.headers.Cookie);
      }
    } else if (config.url !== '/login') {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Added accessToken to request headers:', config.headers.Authorization);
      }
    } else {
      console.log('Login request - skipping token attachment');
    }

    console.log('Final request config:', config);
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }

);

// 응답 인터셉터
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response received:', response);

    // 로그인 성공 시 accessToken 저장 (예: 로그인 시 토큰 응답 받음)
    if (response.config.url === '/login' && response.headers['authorization']) {
      const token = response.headers['authorization'].split(' ')[1]; // "Bearer <token>"에서 토큰 추출
      console.log('Extracted token from Authorization header:', token);
      setToken(token); // localStorage에 저장
    }

    return response;
  },
  async (error: AxiosError) => {
    console.error('Response error:', error);

    const originalRequest = error.config;
    //_retry

    // 응답 에러 처리 (예: 토큰 만료 시 로그아웃 처리)
    if (error.response?.status === 401 && originalRequest && !originalRequest?.baseURL) {
      console.warn('401 Unauthorized - attempting to refresh token');

      // Refresh token으로 accessToken 재발급 시도
      try {
        const refreshResponse = await instance.post('/reissue', {}, {
          withCredentials: true,
        });

        if (refreshResponse.status === 200) {
          const newAccessToken = refreshResponse.data.accessToken;
          setAccessToken(newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return instance(originalRequest); // 실패했던 요청을 재시도
        }

      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        // removeAccessToken();
        // window.location.href = '/login'; // 로그인 페이지로 리다이렉트
      }
    }

    return Promise.reject(error);
  }
);

// API 함수들
export const api = {
  get: <T>(url: string, config = {}) => {
    console.log(`GET request to ${url} with config:`, config);
    return instance.get<T>(url, config);
  },
  post: <T>(url: string, data = {}, config = {}) => {
    console.log(`POST request to ${url} with data:`, data, 'and config:', config);
    return instance.post<T>(url, data, config);
  },
  put: <T>(url: string, data = {}, config = {}) => {
    console.log(`PUT request to ${url} with data:`, data, 'and config:', config);
    return instance.put<T>(url, data, config);
  },
  delete: <T>(url: string, config = {}) => {
    console.log(`DELETE request to ${url} with config:`, config);
    return instance.delete<T>(url, config);
  },
};

export default api;
