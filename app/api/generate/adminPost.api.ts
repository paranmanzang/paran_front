// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**

export const adminPostAPI = {
    findAdminPost: (page: number, size: number) => {
        return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/list`, {
            params: {
                page,
                size
            }
        });
    },
    findAdminPostByNickname: (page: number, size: number, nickname: string) => {
        return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/myList/${nickname}`, {
            params: {
                page,
                size
            }
        });
    },
    findAdminPostDetail:(id:number)=>{
        return api.get<AdminPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
    },
    insert: (adminPostModel: AdminPostModel) => {
        return api.post<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + '/aboard/add', adminPostModel);
    },
    modify: (id:number, adminPostModel: AdminPostModel) => {
        return api.put<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + `/aboard/update/${id}`, adminPostModel);
    },
    drop: (id: number) => {
        return api.delete<Boolean | ExceptionResponseModel>(`/aboard/delete/${id}`);
    },
    findAdminPostViewCount:(id:number) => {
        return api.get<number>(requests.fetchUsers + `aboard/viewcount/${id}`);
    }
}

export default adminPostAPI;