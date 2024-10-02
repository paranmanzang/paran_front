import { ChatUserModel } from "@/app/model/chat/chat.model";
import chatsAPI from "@/app/api/generate/chat.api";
import { saveError, saveLoading } from "@/lib/features/chat/chat.Slice";
import { AppDispatch } from "@/lib/store";

export const invite = async ({ roomId, nickname, dispatch }: { roomId: string, nickname: string, dispatch: AppDispatch }): Promise<Boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.inviteChatRoom(roomId,nickname)
        return response.data;
    } catch (error) {
        console.error('방 초대 중 오류 발생:', error);
        dispatch(saveError("방 초대 중 오류 발생했습니다."));
        return false;
    } finally {
        dispatch(saveLoading(false));
    }
};

export const findPeopleList = async ({ roomId, dispatch }: { roomId: string, dispatch: AppDispatch }): Promise<ChatUserModel[]> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.findChatRoomPeopleList(roomId)
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        dispatch(saveError("유저 목록을 불러오는 중 오류가 발생했습니다."));
        console.error('방에 참여 중인 User 찾는 중 오류 발생:', error);
        return [];
    } finally {
        dispatch(saveLoading(false));
    }
}

export const exit = async ({ roomId, nickname, dispatch }: { roomId: string, nickname: string, dispatch: AppDispatch }): Promise<Boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.exitChatRoom(roomId,nickname)
        return response.data;
    } catch (error) {
        console.error('방 나가는 중 오류 발생:', error);
        dispatch(saveError("방 나가는 중 오류 발생했습니다."));
        return false;
    } finally {
        dispatch(saveLoading(false));
    }
}