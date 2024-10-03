import axios from 'axios';
import { getAccessToken, setAccessToken, removeAccessToken, getRefreshToken, setRefreshToken, removeRefreshToken } from '@/app/api/authUtils';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
  timeout: 10000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (config.url !== '/login' && config.url !== '/reissue') {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    if (response.config.url === '/login' && response.data.accessToken && response.data.refreshToken) {
     setAccessToken(response.data.accessToken);
     setRefreshToken(response.data.refreshToken);
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401 && error.config && !error.config._retry) {
      error.config._retry = true;
      try {
        const refreshResponse = await instance.post('/reissue', { refreshToken: getRefreshToken() });
        if (refreshResponse.status === 200) {
          setAccessToken(refreshResponse.data.accessToken);
          if (refreshResponse.data.refreshToken) {
            setRefreshToken(refreshResponse.data.refreshToken);
          }
          return instance(error.config);
        }
      } catch (refreshError) {
        removeAccessToken();
        removeRefreshToken();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default instance;