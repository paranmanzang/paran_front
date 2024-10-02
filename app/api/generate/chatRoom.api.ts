import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import {ChatRoomModel} from "@/app/model/chat/chat.model";

const chatRoomAPI = {
    findList(nickname: string) {
        return api.get<ChatRoomModel[]>(`${requests.fetchChats}/rooms/list`, {
            headers: {
                'nickname': nickname
            }
        });
    },
    insert(roomName: string, nickname: string) {
        return api.post<string | Boolean>(`${requests.fetchChats}/rooms`,
            {name: roomName},
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    modifyName(roomName: string, roomId: string, nickname: string) {
        return api.put<Boolean | String>(`${requests.fetchChats}/rooms/name`,
            {name: roomName, roomId: roomId},
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    modifyPassword(roomId: string, password: string, nickname: string) {
        return api.put<boolean | string>(
            `${requests.fetchChats}/rooms/password`,
            // env 로 빼기 .env.local
            {password, roomId},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'nickname': nickname
                }
            }
        );
    },
    drop(roomId: string) {
        return api.delete<Boolean>(`${requests.fetchChats}/rooms/${roomId}`);
    },
    insertLastReadMessageTime(roomId: string, nickname: string) {
        return api.post<Boolean>(`${requests.fetchChats}/rooms/last-read-time/${roomId}`, {
            headers: {
                'nickname': nickname,
            }
        })
    }
};

export default chatRoomAPI;