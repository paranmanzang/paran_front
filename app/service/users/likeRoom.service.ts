import {AppDispatch} from "@/lib/store";
import {addLikedRoom, deleteLikedRoom, saveLikedRooms} from "@/lib/features/users/users.Slice";
import {saveError, saveLoading} from "@/lib/features/users/user.Slice";
import userAPI from "@/app/api/generate/users.api";
import {LikeRoomModel} from "@/app/model/user/users.model";

export const likeRoom = async (likeRoomModel: LikeRoomModel, dispatch: AppDispatch
): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.addLikeRoom(likeRoomModel)
        if ('id' in response.data && 'nickname' in response.data) {
            dispatch(addLikedRoom(response.data))
        }
    } catch (error) {
        dispatch(saveError("좋아요 중 오류 발생했습니다."));
        console.error('Error adding likeRoom:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 취소
export const removeLikeRoom = async (likeRoomModel: LikeRoomModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.removeLikeRoom(likeRoomModel)
        if (likeRoomModel.id !== undefined) {
            dispatch(deleteLikedRoom(likeRoomModel.id));
        }
    } catch (error) {
        dispatch(saveError("좋아요 취소 중 오류 발생했습니다."));
        console.error('Error adding likeRoom:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 좋아요 마이페이지 확인
export const findLikeRoomList = async (nickname: String, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await userAPI.findLikeRoomList(nickname)
        dispatch(saveLikedRooms(response.data))
    } catch (error) {
        dispatch(saveError("찜한 공간을 찾는 중 오류 발생했습니다."));
        console.error('Error finding likeRoom:', error);
    } finally {
        dispatch(saveLoading(false));
    }
}