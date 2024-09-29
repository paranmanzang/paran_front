import api from '@/app/api/axios';
import requests from '@/app/api/requests';
import { ExceptionResponseModel } from '@/app/model/error.model';
import { GroupPostModel, GroupPostResponseModel } from '@/app/model/group/group.model';


// 게시글 추가 
export const addPost = async (groupPostModel: GroupPostModel): Promise<GroupPostResponseModel | ExceptionResponseModel> => {
    try {
        const response = await api.post<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/addboard', groupPostModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding post:', error.response?.data || error.message);
        throw new Error('게시글 등록 중 오류 발생');
    }
};

// 게시글 수정
export const updatePost = async (groupPostModel: GroupPostModel): Promise<GroupPostResponseModel | ExceptionResponseModel> => {
    try {
        const response = await api.put<GroupPostResponseModel | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/updateboard', groupPostModel);
        return response.data;
    } catch (error: any) {
        console.error('Error updating post:', error.response?.data || error.message);
        throw new Error('게시글 수정 중 오류 발생');
    }
};

// 게시글 삭제
export const deletePost = async (boardId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/grouppost/deleteboard', {
            params: { boardId }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error deleting post:', error.response?.data || error.message);
        throw new Error('게시글 삭제 중 오류 발생');
    }
};

// 내가 속한 그룹의 게시물 목록 조회
export const getPostsByGroupId = async (groupId: number, page: number, size: number, postCategory: string): Promise<GroupPostResponseModel[]> => {
    try {
        const response = await api.get<Page<GroupPostResponseModel>>(requests.fetchGroups + `/grouppost/${groupId}`, {
            params: { page, size, postCategory }
        });
        return response.data.content;
    } catch (error: any) {
        console.error('Error fetching posts by groupId:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    }
};

// 내가 속한 그룹의 게시물 목록 카운트 조회
export const updateViewCount = async (postId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + `/grouppost/${postId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching posts by groupId:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    }
};
