// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**

export const declarationPostAPI = {

    findDeclarationPost: (page: number, size: number) => {
        return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList`, {
            params: {
                page,
                size
            }
        });
    },

    findDeclarationPostByNickname: (page: number, size: number, nickname: string) => {
        return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList/${nickname}`, {
            params: {
                page,
                size
            }
        });
    },

    findDeclarationPostDetail:(id:number)=>{
        return api.get<DeclarationPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
    },
    insert:(declarationPostModel : DeclarationPostModel)=>{
        return api.post<DeclarationPostModel|ExceptionResponseModel>(requests.fetchUsers + `/depost/add`,declarationPostModel);
    },
    drop:(id:number) =>{
        return api.delete<Boolean | ExceptionResponseModel>(`depost/delete/${id}`)
    }

}

export default declarationPostAPI;