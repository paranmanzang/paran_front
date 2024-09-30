import {LikeBookModel} from '@/app/model/group/book.model';
import groupsAPI from "@/app/api/generate/groups.api";
import {AppDispatch} from "@/lib/store";
import {addLikedBook, deleteLikedBook, saveError, saveLikedBooks, saveLoading} from "@/lib/features/group/book.Slice";

// 좋아요
export const likeBook = async (likeBookModel: LikeBookModel, dispatch: AppDispatch
): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.likeBookAPI(likeBookModel)
        if ('id' in response.data && 'nickname' in response.data) {
            dispatch(addLikedBook(response.data))
        }
    } catch (error) {
        dispatch(saveError("좋아요 중 오류 발생했습니다."));
        console.error('Error adding likeBook:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 취소
export const removeLikeBook = async (likeBookModel: LikeBookModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.removeLikeBookAPI(likeBookModel)
        if (likeBookModel.id !== undefined) {
            dispatch(deleteLikedBook(likeBookModel.id));
        }
    } catch (error) {
        dispatch(saveError("좋아요 취소 중 오류 발생했습니다."));
        console.error('Error adding likeBook:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 마이페이지 확인
export const findLikeBookList = async (nickname: String, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findLikeBookListAPI(nickname)
        dispatch(saveLikedBooks(response.data))
    } catch (error) {
        dispatch(saveError("내가 좋아하는 책 찾는 중 오류 발생했습니다."));
        console.error('Error finding likeBook:', error);
    } finally {
        dispatch(saveLoading(false));
    }
}