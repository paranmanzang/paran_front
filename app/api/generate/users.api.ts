// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {AdminPostModel, DeclarationPostModel, FriendModel, LikePostModel, LikeRoomModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";


export const userAPI = {
  get(id: string) {return api.get(`${requests.fetchUsers}/users/${id}`)},
  create(userData: any){return api.post('/users', userData)},
  update(id: string, userData: any){return api.put(`/users/${id}`, userData)},
  delete(id: string){return api.delete(`/users/${id}`)},

  findAdminPost(page: number, size: number){
    return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/list`, {
      params: {
        page,
        size
      }
    });
  },

  findAdminPostByNickname(page: number, size: number, nickname: string){
    return api.get<Page<AdminPostModel>>(`${requests.fetchUsers}/aboard/myList/${nickname}`, {
      params: {
        page,
        size
      }
    });
  },
  findAdminPostDetail(id:number){
    return api.get<AdminPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
  },
  insertAdminPost(adminPostModel: AdminPostModel){
    return api.post<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + '/aboard/add', adminPostModel);
  },
  updateAdminPost(id:number, adminPostModel: AdminPostModel){
    return api.put<AdminPostModel | ExceptionResponseModel>(requests.fetchUsers + `/aboard/update/${id}`, adminPostModel);
  },
  deleteAdminPost(id: number){
    return api.delete<Boolean | ExceptionResponseModel>(`/aboard/delete/${id}`);
  },
  findAdminPostViewCount(id:number){
    return api.get<number>(requests.fetchUsers + `aboard/viewcount/${id}`);
  },

  findDeclarationPost(page: number, size: number){
    return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList`, {
      params: {
        page,
        size
      }
    });
  },

  findDeclarationPostByNickname(page: number, size: number, nickname: string){
    return api.get<Page<DeclarationPostModel>>(`${requests.fetchUsers}/depost/getList/${nickname}`, {
      params: {
        page,
        size
      }
    });
  },

  findDeclarationPostDetail(id:number){
    return api.get<DeclarationPostModel[]>(requests.fetchUsers + `/aboard/list/${id}`);
  },
  insertDeclarationPost(declarationPostModel : DeclarationPostModel){
    return api.post<DeclarationPostModel|ExceptionResponseModel>(requests.fetchUsers + `/depost/add`,declarationPostModel);
  },
  deleteDeclarationPost(id:number){
    return api.delete<Boolean | ExceptionResponseModel>(`depost/delete/${id}`)
  },
  addLikePost(likePostModel: LikePostModel){
    return api.post<LikePostModel | ExceptionResponseModel>(requests.fetchUsers + `/likeposts/add`, likePostModel);
  },
  removeLikePost(likePostModel: LikePostModel){
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeposts/remove', likePostModel);
  },
  findLikePostList(nickname: String){
    return api.get<LikePostModel[]>(requests.fetchUsers + `/likeposts/list/${nickname}`);
  },
  addLikeRoom(likeRoomModel: LikeRoomModel){
    return api.post<LikeRoomModel | ExceptionResponseModel>(requests.fetchUsers + `/likeRoom/add`, likeRoomModel);
  },
  removeLikeRoom(likeRoomModel: LikeRoomModel){
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + '/likeRoom/remove', likeRoomModel);
  },
  findLikeRoomList(nickname: String){
    return api.get<LikeRoomModel[]>(requests.fetchUsers + `/likeRoom/list/${nickname}`);
  },
  addFriend(friendModel: FriendModel){
    return api.post<FriendModel | ExceptionResponseModel>(requests.fetchUsers + `/friend/register`, friendModel);
  },
  removeFriend(id: number){
    return api.delete<boolean | ExceptionResponseModel>(requests.fetchUsers + `/friend/delete/${id}`);
  },
  findFriendList(nickname: String){
    return api.get<FriendModel[]>(requests.fetchUsers + `/friend/list/${nickname}`);
  }
}

export default userAPI;