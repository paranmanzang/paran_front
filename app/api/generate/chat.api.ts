import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import {ChatRoomModel, ChatUserModel} from "@/app/model/chat/chat.model";

const chatsAPI = {
    findChatList(nickname: string) {
        return api.get<ChatRoomModel[]>(`${requests.fetchChats}/room/getchatlist`, {
            headers: {
                'nickname': nickname
            }
        });
    },
    createChatRoom(roomName: string, nickname:string){
        return api.post<string | Boolean>(`${requests.fetchChats}/room`,
            { name: roomName },
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    updateChatRoomName(roomName: string, roomId: string, nickname: string) {
        return api.put<Boolean | String>(`${requests.fetchChats}/room/updatename`,
            { name: roomName, roomId: roomId },
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    updateChatRoomPassword( roomId: string, password: string, nickname: string){
        return api.put<boolean | string>(
            `${requests.fetchChats}/room/updatepassword`,
            // env 로 빼기 .env.local
            { password, roomId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'nickname': nickname
                }
            }
        );
    },
    deleteChatRoom(roomId: string){
        return api.delete<Boolean>(`${requests.fetchChats}/room/${roomId}`);
    },
    saveChatRoomLastReadMessageTime(roomId: string, nickname: string){
        return api.post<Boolean>(`${requests.fetchChats}/room/lastreadtime/${roomId}`, {
            headers: {
                'nickname': nickname,
            }
        })
    },
    inviteChatRoom(roomId: string, nickname: string){
        return api.post<Boolean>(`${requests.fetchChats}/user?roomId=${roomId}`, {
            headers: {
                'nickname': nickname
            }
        });
    },
    findChatRoomPeopleList(roomId: string){
        return api.get<Boolean | ChatUserModel>(`${requests.fetchChats}/user/getpoplelist/${roomId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
   exitChatRoom( roomId: string, nickname: string ){
        return api.delete<Boolean>(`${requests.fetchChats}/user/${roomId}`, {
            headers: {
                'nickname': nickname
            }
        })
    },
    insertMessage(nickname: string, roomId: string, message: string){
        return  api.post<boolean>(`${requests.fetchChats}/message`, {
            message,
            roomId
        }, {
            headers: {
                'nickname': nickname
            }
        });
    },
    findUnReadTotalMessageCount(nickname: string){
        return api.get<number>(`${requests.fetchChats}/message/totalunread`, {
            headers: {
                'nickname': nickname
            }
        })
    }
};

export default chatsAPI;