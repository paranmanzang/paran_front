// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**

export const likeRoomAPI = {
    insert: (likeRoomModel: LikeRoomModel) => {
        return api.post<LikeRoomModel | ExceptionResponseModel>(requests.fetchUsers + `/likeRoom/add`, likeRoomModel);
    },
    drop: (likeRoomModel: LikeRoomModel) => {
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeRoom/remove', likeRoomModel);
    },
    findLikeRoomList: (nickname: String) => {
        return api.get<LikeRoomModel[]>(requests.fetchUsers + `/likeRoom/list/${nickname}`);
    }
}

export default likeRoomAPI;