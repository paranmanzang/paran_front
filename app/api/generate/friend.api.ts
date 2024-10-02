// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**

export const friendAPI = {


    insert: (friendModel: FriendModel) => {
        return api.post<FriendModel | ExceptionResponseModel>(requests.fetchUsers + `/friend/register`, friendModel);
    },
    drop: (id: number) => {
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + `/friend/delete/${id}`);
    },
    findFriendList: (nickname: String) => {
        return api.get<FriendModel[]>(requests.fetchUsers + `/friend/list/${nickname}`);
    }
}

export default friendAPI;