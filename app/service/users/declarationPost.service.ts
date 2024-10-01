import {AdminPostModel, DeclarationPostModel} from "@/app/model/user/users.model";
import {AppDispatch} from "@/lib/store";
import {saveError, saveLoading} from "@/lib/features/users/user.Slice";
import {usersAPI} from "@/app/api/generate/users.api";
import {addDeclarationPost, deleteDeclarationPost, saveDeclarationPosts,} from "@/lib/features/users/users.Slice";


//게시물 추가
export const insertDPost = async (declarationPostModel: DeclarationPostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.insertDeclarationPostAPI(declarationPostModel)
        if ('id' in response.data && 'name' in response.data) {
            dispatch(addDeclarationPost(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시글 등록 중 오류 발생했습니다."));
        console.error('Error adding post:', error.response?.data || error.message);
        throw new Error('게시글 등록 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};

//게시글 삭제
export const deleteDPost = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 시작
        const response = await usersAPI.deleteDeclarationPostAPI(id);
        // 응답 상태가 성공적인 경우만 디스패치
        if (response.status === 200) {
            dispatch(deleteDeclarationPost(id)); // id만 전달
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
export const findDPosts = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findDeclarationPostAPI(page, size)
        if (Array.isArray(response.data)) {
            dispatch(saveDeclarationPosts(response.data))
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
export const findDPostsByNickname = async (page: number, size: number, nickname: string,  dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findDeclarationPostByNicknameAPI(page, size, nickname)
        if (Array.isArray(response.data)) {
            dispatch(saveDeclarationPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 목록 조회 중 오류 발생했습니다."));
        console.error('Error fetching Dposts by nickname:', error.response?.data || error.message);
        throw new Error('게시물 목록 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};
//게시물 상세조회
export const findDPostsDetail = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findDeclarationPostDetailAPI(id)
        if (Array.isArray(response.data)) {
            dispatch(saveDeclarationPosts(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("게시물 조회 중 오류 발생했습니다."));
        console.error('Error fetching viewCount:', error.response?.data || error.message);
        throw new Error('게시물 조회 중 오류 발생');
    } finally {
        dispatch(saveLoading(false));
    }
};