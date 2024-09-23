// api/fetchData.ts
import axiosInstance from './axios';

export const fetchData = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // 필요한 경우 에러를 다시 던져서 상위에서 처리
  }
};