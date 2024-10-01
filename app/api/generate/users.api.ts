// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";


export const userAPI = {
  getUser: (id: string) => api.get(`${requests.fetchUsers}/users/${id}`),
  createUser: (userData: any) => api.post('/users', userData),
  updateUser: (id: string, userData: any) => api.put(`/users/${id}`, userData),
  deleteUser: (id: string) => api.delete(`/users/${id}`),

  findAdminPostAPI: (page: number, size: number) => {
    return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/list`, {
      params: {
        page,
        size
      }
    });
  },

  findAdminPostByNicknameAPI: (page: number, size: number, nickname: string) => {
    return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/myList/${nickname}`, {
      params: {
        page,
        size
      }
    });
  },
  findAdminPostDetailAPI:(id:number)=>{
    return api.get<AdminPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
  },
  insertAdminPostAPI: (adminPostModel: AdminPostModel) => {
    return api.post<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + '/aboard/add', adminPostModel);
  },
  updateAdminPostAPI: (id:number, adminPostModel: AdminPostModel) => {
    return api.put<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + `/aboard/update/${id}`, adminPostModel);
  },
  deleteAdminPostAPI: (id: number) => {
    return api.delete<Boolean | ExceptionResponseModel>(`/aboard/delete/${id}`);
  },
  findAdminPostViewCountAPI:(id:number) => {
    return api.get<number>(requests.fetchUsers + `aboard/viewcount/${id}`);
  },

  findDeclarationPostAPI: (page: number, size: number) => {
    return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList`, {
      params: {
        page,
        size
      }
    });
  },

  findDeclarationPostByNicknameAPI: (page: number, size: number, nickname: string) => {
    return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList/${nickname}`, {
      params: {
        page,
        size
      }
    });
  },

  findDeclarationPostDetailAPI:(id:number)=>{
    return api.get<DeclarationPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
  },
  insertDeclarationPostAPI:(declarationPostModel : DeclarationPostModel)=>{
    return api.post<DeclarationPostModel|ExceptionResponseModel>(requests.fetchUsers + `/depost/add`,declarationPostModel);
  },
  deleteDeclarationPostAPI:(id:number) =>{
    return api.delete<Boolean | ExceptionResponseModel>(`depost/delete/${id}`)
  },
  addLikePostAPI: (likePostModel: LikePostModel) => {
    return api.post<LikePostModel | ExceptionResponseModel>(requests.fetchUsers + `/likeposts/add`, likePostModel);
  },
  removeLikePostAPI: (likePostModel: LikePostModel) => {
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeposts/remove', likePostModel);
  },
  findLikePostListAPI: (nickname: String) => {
    return api.get<LikePostModel[]>(requests.fetchUsers + `/likeposts/list/${nickname}`);
  },
  addLikeRoomAPI: (likeRoomModel: LikeRoomModel) => {
    return api.post<LikeRoomModel | ExceptionResponseModel>(requests.fetchUsers + `/likeRoom/add`, likeRoomModel);
  },
  removeLikeRoomAPI: (likeRoomModel: LikeRoomModel) => {
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeRoom/remove', likeRoomModel);
  },
  findLikeRoomListAPI: (nickname: String) => {
    return api.get<LikeRoomModel[]>(requests.fetchUsers + `/likeRoom/list/${nickname}`);
  },
  addFriendAPI: (friendModel: FriendModel) => {
    return api.post<FriendModel | ExceptionResponseModel>(requests.fetchUsers + `/friend/register`, friendModel);
  },
  removeFriendAPI: (id: number) => {
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + `/friend/delete/${id}`);
  },
  findFriendListAPI: (nickname: String) => {
    return api.get<FriendModel[]>(requests.fetchUsers + `/friend/list/${nickname}`);
  }
}

export default userAPI;