import { ChatUserModel } from "../../app/modelchat.model";

const chatUserApi = 'http://localhost:8081/api/chats/user'

export const invite = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        // API 요청 전송
        const response = await fetch(chatUserApi + `?roomId=${roomId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            }
        });
        const result = await response.json();

        return result ? result : false;
    } catch (error) {
        console.error('방 초대 중 오류 발생:', error);
        return false;
    }
};

export const getPeopleList = async ({ roomId }: { roomId: string }): Promise<Boolean | ChatUserModel> => {
    try {
        const response = await fetch(chatUserApi + `/getpoplelist/${roomId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('방에 참여 중인 User 찾는 중 오류 발생:', error);
        return false;
    }
}

export const exit = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await fetch(chatUserApi + `/${roomId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('방 나가는 중 오류 발생:', error);
        return false;
    }
}