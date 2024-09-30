import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatUserModel } from "@/app/model/chat/chat.model";
import chatsAPI from "@/app/api/generate/chats.api";
import {saveError} from "@/lib/features/chat/chat.Slice";
import {AppDispatch} from "@/lib/store";

export const invite = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await chatsAPI.inviteChatRoomAPI(roomId,nickname)

        return response.data;
    } catch (error) {
        console.error('방 초대 중 오류 발생:', error);
        return false;
    }
};

export const findPeopleList = async ({ roomId,dispatch }: { roomId: string,dispatch: AppDispatch }): Promise<ChatUserModel[]> => {
    try {
        const response = await chatsAPI.findChatRoomPeopleListAPI(roomId)
        if (Array.isArray(response.data)) {
            return response.data;
        }else {
            return [];
        }
    } catch (error) {
        dispatch(saveError("유저 목록을 불러오는 중 오류가 발생했습니다."));
        console.error('방에 참여 중인 User 찾는 중 오류 발생:', error);
        return [];
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