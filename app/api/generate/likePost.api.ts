// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**

export const likePostAPI = {
    insert: (likePostModel: LikePostModel) => {
        return api.post<LikePostModel | ExceptionResponseModel>(requests.fetchUsers + `/likeposts/add`, likePostModel);
    },
    drop: (likePostModel: LikePostModel) => {
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeposts/remove', likePostModel);
    },
    findLikePostList: (nickname: String) => {
        return api.get<LikePostModel[]>(requests.fetchUsers + `/likeposts/list/${nickname}`);
    }
}

export default likePostAPI;