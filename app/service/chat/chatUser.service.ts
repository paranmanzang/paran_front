import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatUserModel } from "@/app/model/chat/chat.model";
import chatsAPI from "@/app/api/generate/api.chats";

export const invite = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await chatsAPI.inviteChatRoomAPI(roomId,nickname)

        return response.data;
    } catch (error) {
        console.error('방 초대 중 오류 발생:', error);
        return false;
    }
};

export const findPeopleList = async ({ roomId }: { roomId: string }): Promise<Boolean | ChatUserModel> => {
    try {
        const response = await chatsAPI.findChatRoomPeopleListAPI(roomId)
        return response.data;
    } catch (error) {
        console.error('방에 참여 중인 User 찾는 중 오류 발생:', error);
        return false;
    }
}

export const exit = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await chatsAPI.exitChatRoomAPI(roomId,nickname)
        return response.data;
    } catch (error) {
        console.error('방 나가는 중 오류 발생:', error);
        return false;
    }
}