import api from '../axios';
import requests from "@/app/api/requests";
import { LikeRoomModel } from "@/app/model/user/users.model";
import { ExceptionResponseModel } from "@/app/model/error.model";

export const likeRoomAPI = {
    insert: (likeRoomModel: LikeRoomModel) => {
        return api.post<LikeRoomModel | ExceptionResponseModel>(requests.fetchUsers + `/likeRooms`, likeRoomModel);
    },
    drop: (likeRoomModel: LikeRoomModel) => {
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeRooms', {
            data: likeRoomModel
        });
    },
    findLikeRoomList: (nickname: string) => {
        return api.get<LikeRoomModel[]>(requests.fetchUsers + `/likeRooms/${nickname}`);
    }
}

export default likeRoomAPI;