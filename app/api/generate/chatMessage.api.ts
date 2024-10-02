import api from "@/app/api/axios";
import requests from "@/app/api/requests";

const chatMessageAPI = {
    insert(nickname: string, roomId: string, message: string) {
        return api.post<boolean>(`${requests.fetchChats}/messages`, {
            message,
            roomId
        }, {
            headers: {
                'nickname': nickname
            }
        });
    },
    findUnReadTotalCount(nickname: string) {
        return api.get<number>(`${requests.fetchChats}/messages/total-un-read`, {
            headers: {
                'nickname': nickname
            }
        })
    }
};

export default chatMessageAPI;