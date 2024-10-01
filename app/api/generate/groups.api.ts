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


export const groupsAPI = {
    findBookListAPI(page: number, size: number) {
        return api.get<Page<BookResponseModel>>(`${requests.fetchGroups}/books`, {
            params: {
                page,
                size
            }
        });
    },
    findGroupListAPI(page: number, size: number){
        return api.get<Page<GroupResponseModel>>(requests.fetchGroups + '/groups/grouplist', {params: {page, size}});
    },
    findGroupListByNicknameAPI(nickname: string, page: number, size: number){
        return api.get<Page<GroupResponseModel>>(requests.fetchGroups + '/groups/mygrouplist', {
            params: {
                nickname,
                page,
                size
            }
        });
    },
    insertGroupAPI(groupModel: GroupModel){
        return api.post<GroupResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/groups/plusgroup', groupModel);
    },
    enableGroupAPI(groupId: number){
        return api.put<GroupResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminanswer', {params: {groupId}});
    },
    enableCancelGroupAPI(groupId: number){
        return api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminoutGroup', {params: {groupId}});
    },
    disableGroupMemberAPI(groupId: number, nickname: string){
        return api.put<GroupResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminoutMember', {
            params: {
                groupId,
                nickname
            }
        });
    },
    findGroupUserByIdAPI(groupId: number){
        return api.get<JoiningModel[]>(requests.fetchGroups + `/groups/userlist/${groupId}`);
    },
    updateChatRoomIdAPI(roomId: number, groupId: number){
        return api.put<GroupResponseModel | ExceptionResponseModel>(requests.fetchGroups + `/groups/chatroomupdate/${groupId}`, {roomId});
    },
    addMemberAPI(joiningModel: JoiningModel){
        return api.post<JoiningModel | ExceptionResponseModel>(requests.fetchGroups + '/groups/plusmember', joiningModel);
    },
    enableGroupMemberAPI(groupId: number, nickname: string){
        return api.put<JoiningModel | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminplusMember', {
            params: {
                groupId,
                nickname
            }
        });
    },
    deleteGroupAPI(groupId: number){
        return api.delete<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/deleteGroup', {params: {groupId}});
    },
    enableGroupListAPI(page: number, size: number){
        return api.get<Page<GroupResponseModel>>(`${requests.fetchGroups}/groups/updateenablelist`, {
            params: {
                page,
                size
            }
        });
    },
    insertPostAPI(groupPostModel: GroupPostModel){
        return api.post<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/addboard', groupPostModel);
    },
    updatePostAPI(groupPostModel: GroupPostModel){
        return api.put<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/updateboard', groupPostModel);
    },
    deletePostAPI(boardId: number){
        return api.delete<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/deleteboard', {
            params: {boardId}
        });
    },
    findPostsByGroupIdAPI(groupId: number, page: number, size: number, postCategory: string){
        return api.get<Page<GroupPostResponseModel>>(requests.fetchGroups + `/grouppost/${groupId}`, {
            params: {page, size, postCategory}
        });
    },
    updateViewCountAPI(postId: number){
        return api.put<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + `/grouppost/${postId}`);
    },
    likeBookAPI(likeBookModel: LikeBookModel){
        return api.post<LikeBookModel | ExceptionResponseModel>(requests.fetchGroups + `/likebook/add`, likeBookModel);
    },
    removeLikeBookAPI(likeBookModel: LikeBookModel) {
        return api.delete<boolean | ExceptionResponseModel>(requests.fetchGroups + '/likebook/remove', likeBookModel);
    },
    findLikeBookListAPI(nickname: String){
        return api.get<LikeBookModel[]>(requests.fetchGroups + `/likebook/list/${nickname}`);
    }
}

export default groupsAPI;