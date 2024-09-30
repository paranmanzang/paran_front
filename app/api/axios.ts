import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import Cookies from 'js-cookie';

// 쿠키를 사용한 토큰 관리 함수들
const getAccessToken = (): string | undefined => Cookies.get('accessToken');
const setAccessToken = (token: string): void => {Cookies.set('accessToken', token, { secure: true, sameSite: 'strict'})};
const removeAccessToken = (): void => Cookies.remove('accessToken');

const getRefreshToken = (): string | undefined => Cookies.get('refreshToken');
const setRefreshToken = (token: string): void => {Cookies.set('refreshToken', token, { secure: true, sameSite: 'strict'})};
const removeRefreshToken = (): void => Cookies.remove('refreshToken');

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL, // 백엔드 API 주소
  headers: { 'Content-Type': 'application/json' }, // 기본 헤더 설정
  withCredentials: true // 쿠키를 포함한 요청을 위해 필요
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('Request config before adding token:', config);

    if (config.url !== '/login' && config.url !== '/reissue') {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Added accessToken to request headers:', config.headers.Authorization);
      }
    } else {
      console.log('Login or token refresh request - skipping token attachment');
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

    // 로그인 성공 시 accessToken과 refreshToken 저장
    if (response.config.url === '/login' && response.data.accessToken && response.data.refreshToken) {
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      console.log('Saved tokens to cookies');
    }

    return response;
  },
  async (error: AxiosError) => {
    console.error('Response error:', error);

    if (error.response?.status === 401 && error.config && '_retry' in error.config) {
      if (!error.config._retry) {
        error.config._retry = true;
        console.warn('401 Unauthorized - attempting to refresh token');
     ;

      try {
        const refreshResponse = await instance.post('/reissue', {
          refreshToken: getRefreshToken()
        });

        if (refreshResponse.status === 200) {
          setAccessToken(refreshResponse.data.accessToken);
          if (refreshResponse.data.refreshToken) {
            setRefreshToken(refreshResponse.data.refreshToken);
          }
          instance.defaults.headers.common['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`;
          return instance(error.config);
        }
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        removeAccessToken();
        removeRefreshToken();
        window.location.href = '/login'; // 로그인 페이지로 리다이렉트
      }
    }

    return Promise.reject(error);
  }
  }
)

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