import axios from 'axios';
import { getAccessToken, setAccessToken, removeAccessToken, getRefreshToken, setRefreshToken, removeRefreshToken } from '@/app/api/authUtils';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_URL,
  headers: { 'Content-Type': 'application/json'},
  withCredentials: true,
  timeout: 10000,
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    console.log('Request URL:', config.url);
    if (config.url !== '/login' && config.url !== '/reissue') {
      const token = getAccessToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Access token added to request');
      } else {
        console.log('No access token available');
      }
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    console.log('Response received for URL:', response.config.url);
    if (response.config.url === '/login' && response.data.accessToken && response.data.refreshToken) {
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      console.log('Login successful, tokens set');
    }
    return response;
  },
  async (error) => {
    console.error('Response error:', error.response?.status, error.config.url);
    if (error.response?.status === 401 && error.config && !error.config._retry) {
      error.config._retry = true;
      console.log('Attempting to refresh token');
      try {
        const refreshResponse = await instance.post('/reissue', { refreshToken: getRefreshToken() });
        if (refreshResponse.status === 200) {
          console.log('Token refresh successful');
          setAccessToken(refreshResponse.data.accessToken);
          if (refreshResponse.data.refreshToken) {
            setRefreshToken(refreshResponse.data.refreshToken);
            console.log('New refresh token set');
          }
          console.log('Retrying original request');
          return instance(error.config);
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        removeAccessToken();
        removeRefreshToken();
        console.log('Tokens removed, redirecting to login');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default instance;