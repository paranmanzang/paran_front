import {GroupPostModel} from '@/app/model/group/group.model';
import groupsAPI from "@/app/api/generate/groups.api";
import {AppDispatch} from "@/lib/store";
import {
    addGroupPost,
    deleteGroupPost,
    saveError,
    saveGroupPosts,
    saveLoading,
    updateGroupPost
} from "@/lib/features/group/group.Slice";


// 게시글 추가 
export const insertPost = async (groupPostModel: GroupPostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.insertPostAPI(groupPostModel)
        if ('id' in response.data && 'name' in response.data) {
            dispatch(addGroupPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시글 등록 중 오류 발생했습니다."));
        console.error('Error adding post:', error.response?.data || error.message);
        throw new Error('게시글 등록 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};

// 게시글 수정
export const updatePost = async (groupPostModel: GroupPostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.updatePostAPI(groupPostModel)
        if ('boardId' in response.data && 'title' in response.data) {
            dispatch(updateGroupPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시글 수정 중 오류 발생했습니다."));
        console.error('Error updating post:', error.response?.data || error.message);
        throw new Error('게시글 수정 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};

// 게시글 삭제
export const deletePost = async (boardId: number, dispatch: AppDispatch, postCategory: string): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.deletePostAPI(boardId)
        dispatch(deleteGroupPost({id: boardId, postCategory}));
    } catch (error: any) {
        dispatch(saveError("게시글 삭제 중 오류 발생했습니다."));
        console.error('Error deleting post:', error.response?.data || error.message);
        throw new Error('게시글 삭제 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};

// 내가 속한 그룹의 게시물 목록 조회
export const findPostsByGroupId = async (groupId: number, page: number, size: number, postCategory: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findPostsByGroupIdAPI(groupId, page, size, postCategory)
        if (Array.isArray(response.data)) {
            dispatch(saveGroupPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 목록 조회 중 오류 발생했습니다."));
        console.error('Error fetching posts by groupId:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};

// 내가 속한 그룹의 게시물 목록 카운트 수정
export const updateViewCount = async (postId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.updateViewCountAPI(postId)
        if ('boardId' in response.data && 'title' in response.data) {
            dispatch(updateGroupPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 목록 조회 중 오류 발생했습니다."));
        console.error('Error fetching posts by groupId:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
