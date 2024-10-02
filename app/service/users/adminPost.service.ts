import {AdminPostModel} from "@/app/model/user/users.model";
import {AppDispatch} from "@/lib/store";
import {saveError, saveLoading} from "@/lib/features/users/user.Slice";
import {usersAPI} from "@/app/api/generate/users.api";
import {addAdminPost, deleteAdminPost, saveAdminPosts, updateAdminPost} from "@/lib/features/users/users.Slice";
//insert, drop, modify, find**


//게시물 추가
export const insertAPost = async (adminPostModel: AdminPostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.insertAdminPostAPI(adminPostModel)
        if ('id' in response.data && 'name' in response.data) {
            dispatch(addAdminPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시글 등록 중 오류 발생했습니다."));
        console.error('Error adding post:', error.response?.data || error.message);
        throw new Error('게시글 등록 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//게시물 수정

export const modifyAPost = async (id: number, adminPostModel: AdminPostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.modifyAdminPostAPI(id, adminPostModel)
        if ('id' in response.data && 'title' in response.data) {
            dispatch(updateAdminPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시글 수정 중 오류 발생했습니다."));
        console.error('Error updating post:', error.response?.data || error.message);
        throw new Error('게시글 수정 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//게시글 삭제
export const dropAPost = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 시작
        const response = await usersAPI.dropAdminPostAPI(id);
        // 응답 상태가 성공적인 경우만 디스패치
        if (response.status === 200) {
            dispatch(deleteAdminPost(id)); // id만 전달
        } else {
            throw new Error('게시글 삭제 실패');
        }
    } catch (error: any) {
        dispatch(saveError("게시글 삭제 중 오류 발생했습니다."));
        console.error('Error deleting post:', error.response?.data || error.message);
        throw new Error('게시글 삭제 중 오류 발생');
    } finally {
        dispatch(saveLoading(false)); // 로딩 종료
    }
};
//게시물 리스트 조회
export const findAPosts = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findAdminPostAPI(page, size)
        if (Array.isArray(response.data)) {
            dispatch(saveAdminPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 목록 조회 중 오류 발생했습니다."));
        console.error('Error fetching Aposts:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//게시물 리스트 조회 (닉네임)
export const findAPostsByNickname = async (page: number, size: number, nickname: string,  dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findAdminPostByNicknameAPI(page, size, nickname)
        if (Array.isArray(response.data)) {
            dispatch(saveAdminPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 목록 조회 중 오류 발생했습니다."));
        console.error('Error fetching Aposts by nickname:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//게시물 상세조회
export const findAPostsDetial = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findAdminPostDetailAPI(id)
        if (Array.isArray(response.data)) {
            dispatch(saveAdminPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 조회 중 오류 발생했습니다."));
        console.error('Error fetching viewCount:', error.response?.data || error.message);
        throw new Error('게시물 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//조회수
export const findViewCount = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findAdminPostViewCountAPI(id)
        if (Array.isArray(response.data)) {
            dispatch(saveAdminPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("조회수 확인 중 오류 발생했습니다."));
        console.error('Error fetching viewCount:', error.response?.data || error.message);
        throw new Error('조회수 확인 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
