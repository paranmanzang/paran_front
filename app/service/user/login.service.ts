import { UserModel } from "@/app/model/user/user.model";
import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { setAccessToken } from "@/app/api/authUtils";
import { AppDispatch } from "@/lib/store";
import {getCurrentUser, saveNickname } from "@/lib/features/users/user.slice";
import { userService } from "./user.service";
import { groupService } from "../group/group.service";
import { likeBookService } from "../group/likeBook.service";
import { likePostService } from "../group/likePost.service";
import { roomService } from "../room/room.service";
import { useSelector } from "react-redux";

const login = async (username: string, password: string, dispatch: AppDispatch): Promise<any> => {
  try {
    const response = await api.post<UserModel>(requests.fetchLogin,
      { username, password }
    )

    const token = response.headers['authorization'].replace("Bearer ", "")
    //console.log("전체 응답 헤더:", response.headers);

    if (token) {
      setAccessToken(token);
      dispatch(saveNickname(response.headers['nickname']))

      const nickname = response.headers['nickname']
      userService.findUserDetail(nickname, dispatch)
      groupService.findByNickname(nickname, dispatch)
      likeBookService.findByNickname(nickname, dispatch)
      roomService.findAllLikedByNickname(nickname, dispatch)
      likePostService.findAllByUserNickname(nickname, dispatch)

    } else {
      console.log("토큰이 안보여요 ㅠㅠ")
      throw new Error('토큰을 받지 못했습니다.');
    }
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('로그인 중 오류 발생');
    }
  }
};

const get = async (): Promise<UserModel> => {
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
      throw new Error('get 중 오류 발생');
    }
  }
};
// login.service.ts
const oauth = async (router: any): Promise<void> => {
  try {
    const oauthUrl = process.env.NEXT_PUBLIC_OAUTH_URL;

    if (!oauthUrl) {
      throw new Error('OAuth URL is not defined');
    }
    console.log(oauthUrl)

    if (oauthUrl.startsWith('http') || oauthUrl.startsWith('https')) {
      // 외부 URL인 경우
      window.location.href = oauthUrl;

    } else {
      // 내부 경로인 경우
      await router.push(oauthUrl);
    }
    
  } catch (error: any) {
    console.error('OAuth redirection failed:', error);
    throw new Error('OAuth 인증 중 오류가 발생했습니다.');
  }
};

export const loginService = {
  login,
  get,
  oauth
}
