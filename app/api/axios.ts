// api/axiosInstance.ts
import axios from "axios";

// 기본 axios 설정을 정의 (baseURL 설정이나 기본 헤더 추가)
const axiosInstance = axios.create({
  baseURL: "https://localhost:8083", // 기본 API URL
  timeout: 10000, // 요청 시간 제한
});

export default axiosInstance;