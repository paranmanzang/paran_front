import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Refresh token을 저장하기 위한 함수들
const getRefreshToken = (): string | null => localStorage.getItem('refreshToken');
const setRefreshToken = (token: string): void => localStorage.setItem('refreshToken', token);
const removeRefreshToken = (): void => localStorage.removeItem('refreshToken');

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // 이를 통해 쿠키가 자동으로 포함됩니다
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 쿠키는 자동으로 포함되므로 추가 작업이 필요 없습니다
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답 헤더에서 refresh token을 확인하고 저장
    const refreshToken = response.headers['x-refresh-token'];
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as undefined;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh token을 사용하여 새 액세스 토큰 요청
        const refreshToken = getRefreshToken();
        const response = await instance.post('/auth/refresh', { refreshToken });
        
        if (refreshToken && typeof refreshToken === 'string') {
          setRefreshToken(refreshToken);
        }
        
        // 서버에서 새로운 쿠키(액세스 토큰)를 설정했다고 가정
        // 새 refresh token이 있다면 저장
        const newRefreshToken = response.headers['x-refresh-token'];
        if (newRefreshToken) {
          setRefreshToken(newRefreshToken);
        }
        
        // 원래 요청 재시도
        return instance(originalRequest);
      } catch (refreshError) {
        // Refresh 실패 시 로그아웃 처리
        removeRefreshToken();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// API 함수들
export const api = {
  get: <T>(url: string, config = {}) => instance.get<T>(url, config),
  post: <T>(url: string, data = {}, config = {}) => instance.post<T>(url, data, config),
  put: <T>(url: string, data = {}, config = {}) => instance.put<T>(url, data, config),
  delete: <T>(url: string, config = {}) => instance.delete<T>(url, config),
};

export default api;