"use client"
import { UserModel } from "@/app/model/user/user.model";
import api from "@/app/api/axios";
import requests from "@/app/api/requests";

export const login = async (username: string, password: string): Promise<UserModel> => {
  try {
    const response = await api.post<UserModel>(requests.fetchLogin,
      { username, password }
    )
    
    console.log("로그인 결과: ", response)
    return response.data;
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

export const get = async (): Promise<UserModel> => {
  try {
    const response = await api.get<any>("/get")

    console.log("GET: ", response)
    return response.data;

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
// login.service.ts
export const oauth = async (router: any): Promise<void> => {
  try {
    const oauthUrl = process.env.NEXT_PUBLIC_OAUTH_URL;
    
    if (!oauthUrl) {
      throw new Error('OAuth URL is not defined');
    }

    if (oauthUrl.startsWith('http') || oauthUrl.startsWith('https')) {
      // 외부 URL인 경우
      window.location.href = oauthUrl;
    } else {
      // 내부 경로인 경우 // await 경로로 router?를 넣어서 생기는 에러가 남...?
      await router.push(oauthUrl);
    }
  } catch (error: any) {
    console.error('OAuth redirection failed:', error);
    throw new Error('OAuth 인증 중 오류가 발생했습니다.');
  }
};