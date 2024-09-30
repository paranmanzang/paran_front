import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import {ChatRoomModel, ChatUserModel} from "@/app/model/chat/chat.model";

const chatsAPI = {
    findChatListAPI: (nickname: string) => {
        return api.get<ChatRoomModel[]>(`${requests.fetchChats}/room/getchatlist`, {
            headers: {
                'nickname': nickname
            }
        });
    },
    createChatRoomAPI: (roomName: string, nickname:string) => {
        return api.post<string | Boolean>(`${requests.fetchChats}/room`,
            { name: roomName },
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    updateChatRoomNameAPI: (roomName: string, roomId: string, nickname: string) => {
        return api.put<Boolean | String>(`${requests.fetchChats}/room/updatename`,
            { name: roomName, roomId: roomId },
            {
                headers: {
                    'nickname': nickname
                }
            }
        );
    },
    updateChatRoomPasswordAPI: ( roomId: string, password: string, nickname: string) => {
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
    deleteChatRoomAPI: (roomId: string) => {
        return api.delete<Boolean>(`${requests.fetchChats}/room/${roomId}`);
    },
    saveChatRoomLastReadMessageTimeAPI: (roomId: string, nickname: string) => {
        return api.post<Boolean>(`${requests.fetchChats}/room/lastreadtime/${roomId}`, {
            headers: {
                'nickname': nickname,
            }
        })
    },
    inviteChatRoomAPI: (roomId: string, nickname: string) => {
        return api.post<Boolean>(`${requests.fetchChats}/user?roomId=${roomId}`, {
            headers: {
                'nickname': nickname
            }
        });
    },
    findChatRoomPeopleListAPI: (roomId: string) => {
        return api.get<Boolean | ChatUserModel>(`${requests.fetchChats}/user/getpoplelist/${roomId}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
   exitChatRoomAPI: ( roomId: string, nickname: string ) => {
        return api.delete<Boolean>(`${requests.fetchChats}/user/${roomId}`, {
            headers: {
                'nickname': nickname
            }
        })
    },
    insertMessageAPI: (nickname: string, roomId: string, message: string) => {
        return  api.post<boolean>(`${requests.fetchChats}/message`, {
            message,
            roomId
        }, {
            headers: {
                'nickname': nickname
            }
        });
    },
    findUnReadTotalMessageCountAPI: (nickname: string) => {
        return api.get<number>(`${requests.fetchChats}/message/totalunread`, {
            headers: {
                'nickname': nickname
            }
        })
    }
};

export default chatsAPI;
