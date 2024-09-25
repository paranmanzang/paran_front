import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error.model';
import { GroupPostModel, GroupPostResponseModel } from '../../app/modelgroup.model';

const api = axios.create({
    baseURL: 'http://localhost:8084/api/groups/grouppost',
});

// 게시글 추가 
export const addPost = async (groupPostModel: GroupPostModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post('/addboard', groupPostModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding post:', error.response?.data || error.message);
        throw new Error('게시글 등록 중 오류 발생');
    }
};

// 게시글 수정
export const updatePost = async (groupPostModel: GroupPostModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put('/updateboard', groupPostModel);
        return response.data;
    } catch (error: any) {
        console.error('Error updating post:', error.response?.data || error.message);
        throw new Error('게시글 수정 중 오류 발생');
    }
};

// 게시글 삭제
export const deletePost = async (boardId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete('/deleteboard', {
            params: { boardId }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error deleting post:', error.response?.data || error.message);
        throw new Error('게시글 삭제 중 오류 발생');
    }
};

// 내가 속한 그룹의 게시물 목록 조회
export const getPostsByGroupId = async (groupId: number): Promise<GroupPostResponseModel[]> => {
    try {
        const response = await api.get('/boardlist', {
            params: { groupId }
        });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching posts by groupId:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    }
};

// 게시글 상세 조회 (postId로 조회)
export const getBoardPostByPostId = async (postId: number): Promise<GroupPostResponseModel> => {
    try {
        const response = await api.get(`/postDetail/${postId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching post details:', error.response?.data || error.message);
        throw new Error('게시물 상세 조회 중 오류 발생');
    }
};

// 카테고리 ID로 게시글 목록 조회
export const getPostsByCategoryId = async (categoryId: number): Promise<GroupPostResponseModel[]> => {
    try {
        const response = await api.get(`/listByCategory/${categoryId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching posts by categoryId:', error.response?.data || error.message);
        throw new Error('카테고리별 게시물 조회 중 오류 발생');
    }
};