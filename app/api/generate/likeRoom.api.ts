import { LikeRoomModel } from "@/app/model/user/users.model";
import requests from "@/app/api/requests";
import api from "@/app/api/axios";

export const likeRoomAPI = {
    insert: (likeRoomModel: LikeRoomModel) => {
        return api.post<LikeRoomModel>(requests.fetchUsers + `/likerooms`, likeRoomModel);
    },
    drop: (likeRoomModel: LikeRoomModel) => {
        return api.delete<boolean>(requests.fetchUsers + '/likerooms', {
            data: likeRoomModel
        });
    },
    findLikeRoomList: (nickname: string) => {
        return api.get<LikeRoomModel[]>(requests.fetchUsers + `/likerooms/${nickname}`);
    }
}