import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatRoomModel } from "@/app/model/chat/chat.model";

export const createRoom = async ({ roomName, nickname }: { roomName: string, nickname: string }): Promise<string | Boolean> => {
    try {
        const response = await api.post<string | Boolean>(`${requests.fetchChats}/room`,
            { name: roomName },
            {
                headers: {
                    'nickname': nickname
                }
            }
        );

        return response.data;
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('방 생성 중 오류 발생:', error);
        return errorMessage;
    }
};

export const getChatList = async ({ nickname }: { nickname: string }): Promise<Boolean | ChatRoomModel[]> => {
    try {
        const response = await api.get<Boolean | ChatRoomModel[]>(`${requests.fetchChats}/room/getchatlist`, {
            headers: {
                'nickname': nickname
            }
        });
        return response.data;
    } catch (error) {
        console.error('방 찾기 중 오류 발생:', error);
        return false;
    }
}

export const updateName = async ({ roomName, roomId, nickname }: { roomName: string, roomId: string, nickname: string }): Promise<Boolean | String> => {
    try {
        const response = await api.put<Boolean | String>(`${requests.fetchChats}/room/updatename`,
            { name: roomName, roomId: roomId },
            {
                headers: {
                    'nickname': nickname
                }
            }
        )
        return response.data
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('이름 수정 중 오류 발생:', error);
        return errorMessage;
    }
}

export const updatePassword = async ({ roomId, password, nickname }: { roomId: string, password: string, nickname: string }): Promise<boolean | string> => {
    try {
        const response = await api.put<boolean | string>(
            `${requests.fetchChats}/room/updatepassword`,
            { password, roomId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'nickname': nickname
                }
            }
        );

        return response.data
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('비밀번호 변경 중 오류 발생:', errorMessage);
        return errorMessage;
    }
};

export const deleteRoom = async ({ roomId }: { roomId: string }): Promise<Boolean> => {
    try {
        const response = await api.delete<Boolean>(`${requests.fetchChats}/room/${roomId}`)
        return response.data;
    } catch (error) {
        console.error('방 삭제 중 오류 발생:', error);
        return false;
    }
}

export const saveLastReadMessageTime = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await api.post<Boolean>(`${requests.fetchChats}/room/lastreadtime/${roomId}`, {
            headers: {
                'nickname': nickname,
            }
        })
        return response.data;
    } catch (error) {
        console.error('마지막 읽은 메세지 시간 저장 중 오류 발생:', error);
        return false;
    }
}