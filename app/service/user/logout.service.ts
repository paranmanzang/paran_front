import api from "@/app/api/axios";
import requests from "@/app/api/requests";

export const logout = async (): Promise<any> => {
  try {
    const response = await api.post<any>(requests.fetchLogout);
    console.log("로그아웃 응답: ", response)
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('주소 검색 중 오류 발생');
    }
  }
};

