import api from "@/app/api/axios";
import requests from "@/app/api/requests";
import {UserModel} from "@/app/model/user/user.model";
import {AdminPostModel} from "@/app/model/user/users.model";
import {ExceptionResponseModel} from "@/app/model/error.model";

export const userAPI = {

    createUserAPI: (userModel: UserModel) => {
        return api.post<UserModel | ExceptionResponseModel>(requests.fetchUsers + '/create', userModel);
    },
    getAllUserAPI: (nickname: string) => {
        return api.get(`${requests.fetchUsers}/getAllUsers`, {
            params: {
                nickname
            }
        });
    },
    getDetailUserAPI: (nickname:string )=> {
        return api.get(`${requests.fetchUsers}/getUserDetail`, {
            params: {
                nickname
            }
        });
    },
    updatePasswordAPI: (nickname: string, newPassword: string) => {
        return api.put(`${requests.fetchUsers}/updatePassword`, {
            params: {
                nickname,
                newPassword
            }
        });
    },
    updateRoleAPI: (nickname: string, newRole: string) => {
        return api.put(`${requests.fetchUsers}/updateRole`, {
            params: {
                nickname,
                newRole
            }
        });
    },
    updateDeclarationAPI: (nickname: string) => {
        return api.put(`${requests.fetchUsers}/updateDeclaration`, {
            params: {
                nickname
            }
        });
    },
    deleteUserAPI: (nickname: string) => {
        return api.delete(`${requests.fetchUsers}/delete`, {
            params: {
                nickname
            }
        });
    },
    logoutTimeAPI : (nickname: string) => {
        return api.put(`${requests.fetchUsers}/logoutUserTime`, {
            params: {
                nickname
            }
        });
    },
    checkRoleAPI:(nickname: string) => {
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