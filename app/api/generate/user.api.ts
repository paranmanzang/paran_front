import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import {UserModel} from "@/app/model/user/user.model";
import {AdminPostModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";
//insert, drop, modify, find**
export const userAPI = {

    insert: (userModel: UserModel) => {
        return api.post<UserModel | ExceptionResponseModel>(requests.fetchUsers + '/create', userModel);
    },
    findAllUser: (nickname: string) => {
        return api.get(`${requests.fetchUsers}/getAllUsers`, {
            params: {
                nickname
            }
        });
    },
    findDetailUser: (nickname:string )=> {
        return api.get(`${requests.fetchUsers}/getUserDetail`, {
            params: {
                nickname
            }
        });
    },
    modifyPassword: (nickname: string, newPassword: string) => {
        return api.put(`${requests.fetchUsers}/updatePassword`, {
            params: {
                nickname,
                newPassword
            }
        });
    },
    modifyRole: (nickname: string, newRole: string) => {
        return api.put(`${requests.fetchUsers}/updateRole`, {
            params: {
                nickname,
                newRole
            }
        });
    },
    modifyDeclaration: (nickname: string) => {
        return api.put(`${requests.fetchUsers}/updateDeclaration`, {
            params: {
                nickname
            }
        });
    },
    drop: (nickname: string) => {
        return api.delete(`${requests.fetchUsers}/delete`, {
            params: {
                nickname
            }
        });
    },
    modifyLogoutTime : (nickname: string) => {
        return api.put(`${requests.fetchUsers}/logoutUserTime`, {
            params: {
                nickname
            }
        });
    },
    checkRole:(nickname: string) => {
            return api.get(`${requests.fetchUsers}/checkRole`, {
                params: {
                    nickname
                }
            });
        },

    checkNickname: (userModel: UserModel) => {
            return api.post<UserModel | ExceptionResponseModel>(requests.fetchUsers + '/checkNickname', userModel);
        },

    checkPassword: (userModel: UserModel) => {
            return api.post<UserModel | ExceptionResponseModel>(requests.fetchUsers + '/checkPassword', userModel);
        }
}



export default userAPI;