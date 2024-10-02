import {ExceptionResponseModel} from "@/app/model/error.model";
import requests from "@/app/api/requests";
import api from "@/app/api/axios";
import {BookResponseModel, LikeBookModel} from "@/app/model/group/book.model";

import {
    GroupModel,
    GroupPostModel,
    GroupPostResponseModel,
    GroupResponseModel,
    JoiningModel,
} from "@/app/model/group/group.model";


export const likeBookAPI = {
    insert(likeBookModel: LikeBookModel){
        return api.post<LikeBookModel | ExceptionResponseModel>(requests.fetchGroups + `/like-book`, likeBookModel);
    },
    drop(likeBookModel: LikeBookModel){
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchGroups + '/like-book', likeBookModel);
    },
    findByNickname(nickname: String){
        return api.get<LikeBookModel[]>(requests.fetchGroups + `/like-book/list/${nickname}`);
    }
}

export default likeBookAPI;