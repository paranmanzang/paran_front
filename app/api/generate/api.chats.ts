import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import { ChatRoomModel } from "@/app/model/chat/chat.model";

const chatsAPI = {
    // 채팅 목록을 조회하는 함수 (비동기)
    findChatListAPI: (nickname: string) => {
        return api.get<ChatRoomModel[]>(`${requests.fetchChats}/room/getchatlist`, {
            headers: {
                'nickname': nickname
            }
        });
    },
};

export default chatsAPI;
