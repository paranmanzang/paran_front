// src/services/userService.ts

import requests from "@/app/api/requests";
import {} from "@/app/model/user/user.model";
import {FriendModel} from "@/app/model/user/users.model";
import api from "@/app/api/axios";
//insert, drop, modify, find**

export const friendAPI = {
    insert: (friendModel: FriendModel) => {
        return api.post<FriendModel>(requests.fetchUsers + `/friend`, friendModel);
    },
    drop: (id: number) => {
        return api.delete<boolean>(requests.fetchUsers + `/friend/${id}`);
    },
    findFriendList: (nickname: String) => {
        return api.get<FriendModel[]>(requests.fetchUsers + `/friend/${nickname}`);
    }
}

