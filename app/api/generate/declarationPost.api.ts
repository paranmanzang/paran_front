// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import { DeclarationPostModel } from "@/app/model/user/users.model";
//insert, drop, modify, find**

export const declarationPostAPI = {

    findDeclarationPost: (page: number, size: number) => {
        return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost`, {
            params: {
                page,
                size
            }
        });
    },

    findDeclarationPostByNickname: (page: number, size: number, nickname: string) => {
        return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/${nickname}`, {
            params: {
                page,
                size
            }
        });
    },

    findDeclarationPostDetail: (postId: number) => {
        return api.get<DeclarationPostModel[]>(requests.fetchUsers + `/aboard/details/${postId}`);
    },
    insert: (declarationPostModel: DeclarationPostModel) => {
        return api.post<DeclarationPostModel>(requests.fetchUsers + `/depost`, declarationPostModel);
    },
    drop: (id: number) => {
        return api.delete<Boolean>(`depost/${id}`)
    }

}