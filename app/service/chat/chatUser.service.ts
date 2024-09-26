import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatUserModel } from "@/app/model/chat/chat.model";

export const invite = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await api.post<Boolean>(`${requests.fetchChats}/user?roomId=${roomId}`, {
            headers: {
                'nickname': nickname
            }
        });

        return response.data;
    } catch (error) {
        console.error('방 초대 중 오류 발생:', error);
        return false;
    }
};

export const getPeopleList = async ({ roomId }: { roomId: string }): Promise<Boolean | ChatUserModel> => {
    try {
        const response = await api.get<Boolean | ChatUserModel>(`${requests.fetchChats}/user/getpoplelist/${roomId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('방에 참여 중인 User 찾는 중 오류 발생:', error);
        return false;
    }
}

export const exit = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await api.delete<Boolean>(`${requests.fetchChats}/user/${roomId}`, {
            headers: {
                'nickname': nickname
            }
        })
        return response.data;
    } catch (error) {
        console.error('방 나가는 중 오류 발생:', error);
        return false;
    }
}