import { ChatRoomModel } from "@/app/model/chat/chat.model";
import { saveError, saveLoading } from "@/lib/features/chat/chat.Slice";
import { AppDispatch } from "@/lib/store";
import chatsAPI from "@/app/api/generate/chat.api";

export const createRoom = async ({ roomName, nickname, dispatch }: { roomName: string, nickname: string, dispatch: AppDispatch }): Promise<string | Boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.createChatRoomAPI(roomName, nickname)
        return response.data;
    } catch (error) {
        const errorMessage = (error as Error).message;
        dispatch(saveError("방 생성 중 오류 발생했습니다."));
        console.error('방 생성 중 오류 발생:', error);
        return errorMessage;
    } finally {
        dispatch(saveLoading(false));
    }
};

export const findChatList = async ({ nickname, dispatch }: { nickname: string, dispatch: AppDispatch }): Promise<ChatRoomModel[]> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.findChatListAPI(nickname)
        if (Array.isArray(response.data)) {
            return response.data;
        } else {
            return [];
        }
    } catch (error) {
        dispatch(saveError("방 목록을 불러오는 중 오류가 발생했습니다."));
        console.error("방 목록 불러오기 오류:", error);
        return [];
    } finally {
        dispatch(saveLoading(false));
    }
}

export const updateName = async ({ roomName, roomId, nickname, dispatch }: { roomName: string, roomId: string, nickname: string, dispatch: AppDispatch }): Promise<Boolean | String> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.updateChatRoomNameAPI(roomName, roomId, nickname)
        return response.data
    } catch (error) {
        const errorMessage = (error as Error).message;
        dispatch(saveError("이름 수정 중 오류 발생했습니다."));
        console.error('이름 수정 중 오류 발생:', error);
        return errorMessage;
    } finally {
        dispatch(saveLoading(false));
    }
}

export const updatePassword = async ({ roomId, password, nickname, dispatch }: { roomId: string, password: string, nickname: string, dispatch: AppDispatch }): Promise<boolean | string> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.updateChatRoomPasswordAPI(roomId, password, nickname)
        return response.data
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('비밀번호 변경 중 오류 발생:', errorMessage);
        dispatch(saveError("비밀번호 변경 중 오류 발생했습니다."));
        return errorMessage;
    } finally {
        dispatch(saveLoading(false));
    }
};

export const deleteRoom = async ({ roomId, dispatch }: { roomId: string, dispatch: AppDispatch }): Promise<Boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.deleteChatRoomAPI(roomId)
        return response.data;
    } catch (error) {
        console.error('방 삭제 중 오류 발생:', error);
        dispatch(saveError("방 삭제 중 오류 발생했습니다."));
        return false;
    } finally {
        dispatch(saveLoading(false));
    }
}

export const saveLastReadMessageTime = async ({ roomId, nickname, dispatch }: { roomId: string, nickname: string, dispatch: AppDispatch }): Promise<Boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.saveChatRoomLastReadMessageTimeAPI(roomId, nickname)
        return response.data;
    } catch (error) {
        console.error('마지막 읽은 메세지 시간 저장 중 오류 발생:', error);
        dispatch(saveError("마지막 읽은 메시지 시간 저장 중 오류 발생"));
        return false;
    } finally {
        dispatch(saveLoading(false));
    }
}
