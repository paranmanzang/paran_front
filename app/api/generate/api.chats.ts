import api from "@/app/api/axios";
import requests from "@/app/api/requests";

const chatsAPI = () => {
    createChatRoom: (roomName: string, nickname: string) => {
        return api.post(`${requests.fetchChats}/room`, { name: roomName }, {
            headers: {
                'nickname': nickname
            }
        });
    }
};

export default chatsAPI;
