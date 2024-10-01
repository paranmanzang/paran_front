import {AppDispatch} from "@/lib/store";
import {addLikedPost, deleteLikedPost, saveLikedPosts} from "@/lib/features/users/users.Slice";
import {saveError, saveLoading} from "@/lib/features/users/user.Slice";
import usersAPI from "@/app/api/generate/users.api";
import {LikePostModel} from "@/app/model/user/users.model";

// 좋아요
export const likePost = async (likePostModel: LikePostModel, dispatch: AppDispatch
): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.addLikePostAPI(likePostModel)
        if ('id' in response.data && 'nickname' in response.data) {
            dispatch(addLikedPost(response.data))
        }
    } catch (error) {
        dispatch(saveError("좋아요 중 오류 발생했습니다."));
        console.error('Error adding likePost:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 취소
export const removeLikePost = async (likePostModel: LikePostModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.removeLikePostAPI(likePostModel)
        if (likePostModel.id !== undefined) {
            dispatch(deleteLikedPost(likePostModel.id));
        }
    } catch (error) {
        dispatch(saveError("좋아요 취소 중 오류 발생했습니다."));
        console.error('Error adding likePost:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 마이페이지 확인
export const findLikePostList = async (nickname: String, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await usersAPI.findLikePostListAPI(nickname)
        dispatch(saveLikedPosts(response.data))
    } catch (error) {
        dispatch(saveError("좋아요 한 게시물을 찾는 중 오류 발생했습니다."));
        console.error('Error finding likePost:', error);
    } finally {
        dispatch(saveLoading(false));
    }
}