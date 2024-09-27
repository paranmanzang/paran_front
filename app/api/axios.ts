import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 토큰 관리를 위한 함수들
const getToken = (): string | null => {
  const token = localStorage.getItem('token');
  console.log('Retrieved token from localStorage:', token); // 로그 추가
  return token;
};

const setToken = (token: string): void => {
  console.log('Saving token to localStorage:', token); // 로그 추가
  localStorage.setItem('token', token);
};

const removeToken = (): void => {
  console.log('Removing token from localStorage'); // 로그 추가
  localStorage.removeItem('token');
};

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // 백엔드 API 주소
  headers: { 'Content-Type': 'application/json' }, // 기본 헤더 설정
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Request config before adding token:', config); // 로그 추가

    // 로그인 요청에는 토큰을 추가하지 않음
    if (config.url !== '/login') {
      const token = getToken(); // localStorage에서 토큰 가져오기
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
        console.log('Added token to request headers:', config.headers.Authorization); // 로그 추가
      }
    } else {
      console.log('Login request - skipping token attachment'); // 로그인 요청에는 토큰을 추가하지 않음
    }

    console.log('Final request config:', config); // 로그 추가
    return config;
  },
  (error: AxiosError) => {
    console.error('Request error:', error); // 로그 추가
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('Response received:', response); // 로그 추가

    // 로그인 성공 시 토큰 저장 (예: 로그인 시 토큰 응답 받음)
    if (response.config.url === '/login' && response.data.accessToken) {
      const token = response.data.accessToken; // 응답에서 토큰 추출
      console.log('Extracted token from login response:', token); // 로그 추가
      setToken(token); // 토큰을 localStorage에 저장
    }

    return response;
  },
  (error: AxiosError) => {
    console.error('Response error:', error); // 로그 추가
    // 응답 에러 처리 (예: 토큰 만료 시 로그아웃 처리)
    if (error.response?.status === 401) {
      console.warn('401 Unauthorized - Logging out'); // 로그 추가
      removeToken(); // 토큰 제거
      // 로그아웃 처리 혹은 로그인 페이지로 리다이렉트
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

// API 함수들
export const api = {
  get: <T>(url: string, config = {} ) => {
    console.log(`GET request to ${url} with config:`, config); // 로그 추가
    return instance.get<T>(url, config);
  },
  post: <T>(url: string, data = {}, config = {}) => {
    console.log(`POST request to ${url} with data:`, data, 'and config:', config); // 로그 추가
    return instance.post<T>(url, data, config);
  },
  put: <T>(url: string, data = {}, config = {}) => {
    console.log(`PUT request to ${url} with data:`, data, 'and config:', config); // 로그 추가
    return instance.put<T>(url, data, config);
  },
  delete: <T>(url: string, config = {}) => {
    console.log(`DELETE request to ${url} with config:`, config); // 로그 추가
    return instance.delete<T>(url, config);
  },
};

export default api;
