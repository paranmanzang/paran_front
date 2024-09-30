import requests from "@/app/api/requests";
import api from "@/app/api/axios";
import { ChatMessageModel } from "@/app/model/chat/chat.model";
import chatsAPI from "@/app/api/generate/chats.api";
import {AppDispatch} from "@/lib/store";
import {saveError, saveLoading} from "@/lib/features/chat/chat.Slice";

export const findMessageList = async ({ roomId, nickname, onMessage }: { roomId: string, nickname: string, onMessage: (message: ChatMessageModel) => void }): Promise<void> => {
    try {
        const eventSource = new EventSource(
              `${api}${requests.fetchChats}/message/${roomId}?nickname=${nickname}`
        );

        eventSource.onopen = () => {
            console.log('SSE 연결 성공:', eventSource);
        };

        // 과거 메시지를 수신 (past-message 이벤트)
        eventSource.addEventListener('past-message', (event: MessageEvent) => {
            try {
                const parsedData: ChatMessageModel = JSON.parse(event.data);
                console.log('과거 메시지:', parsedData);
                onMessage(parsedData);  // 상태 업데이트 콜백 호출
            } catch (error) {
                console.error('과거 메시지 파싱 오류:', error);
            }
        });

        // 실시간 메시지를 수신 (chat-message 이벤트)
        eventSource.addEventListener('chat-message', (event: MessageEvent) => {
            try {
                const parsedData: ChatMessageModel = JSON.parse(event.data);
                console.log('실시간 메시지:', parsedData);
                onMessage(parsedData);  // 상태 업데이트 콜백 호출
            } catch (error) {
                console.error('실시간 메시지 파싱 오류:', error);
            }
        });



        // 오류가 발생했을 때 처리
        eventSource.onerror = (error) => {
            console.error("SSE 연결 오류 발생:", error);
            eventSource.close();
        };

    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('SSE 메시지 구독 중 오류 발생:', errorMessage);
    }
};



export const insertMessage = async ({ nickname, roomId, message,dispatch }: { nickname: string, roomId: string, message: string,dispatch: AppDispatch  }): Promise<boolean> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.insertMessageAPI(nickname,roomId,message)
        return response.data;
    } catch (error) {
        dispatch(saveError("채팅 메세지 보내는 중 오류 발생했습니다."));
        console.error('채팅 메세지 보내는 중 오류 발생:', error);
        return false;
    }finally {
        dispatch(saveLoading(false));
    }
}

export const unReadTotalMessageCount = async ({ nickname,dispatch }: { nickname: string,dispatch: AppDispatch  }): Promise<number> => {
    try {
        dispatch(saveLoading(true));
        const response = await chatsAPI.findUnReadTotalMessageCountAPI(nickname)
        return response.data;
    } catch (error) {
        dispatch(saveError("총 User가 읽지 않은 메세지 갯수 찾는 중 오류가 발생했습니다."));
        console.error('총 User가 읽지 않은 메세지 갯수 찾는 중 오류 발생:', error);
        return 0;
    }finally {
        dispatch(saveLoading(false));
    }
}