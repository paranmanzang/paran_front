import { FriendModel } from "@/app/model/user/users.model";
import { AppDispatch } from "@/lib/store";
import { saveError, saveLoading } from "@/lib/features/users/user.slice";
import { friendAPI } from "@/app/api/generate/friend.api";
import { addFriend, deleteFriend, saveFriends } from "@/lib/features/users/friend.slice";

// 친구 추가
const insert = async (friendModel: FriendModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 시작
        const response = await friendAPI.insert(friendModel); // API 호출

        // 응답 상태가 성공적이고, id와 nickname이 포함된 경우만 디스패치
        if (response.status === 200 && 'id' in response.data && 'nickname' in response.data) {
            dispatch(addFriend(response.data)); // 친구 추가
        } else {
            throw new Error('친구 추가 실패');
        }
    } catch (error: any) {
        dispatch(saveError("친구 추가 중 오류 발생했습니다.")); // 에러 메시지 수정
        console.error('Error adding friend:', error.response?.data || error.message); // 에러 로깅
    } finally {
        dispatch(saveLoading(false)); // 로딩 종료
    }
};

// 친구 삭제
const drop = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true)); // 로딩 시작
        const response = await friendAPI.drop(id); // API 호출
        if (response.status === 200) {
            dispatch(deleteFriend(id)); // 친구 삭제
        } else {
            throw new Error('좋아요 취소 실패');
        }
    } catch (error: any) {
        dispatch(saveError("좋아요 취소 중 오류 발생했습니다."));
        console.error('Error removing like post:', error.response?.data || error.message); // 에러 로깅
    } finally {
        dispatch(saveLoading(false)); // 로딩 종료
    }
};

// 친구 리스트 확인
const findFriendList = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await friendAPI.findFriendList(nickname)
        dispatch(saveFriends(response.data))
    } catch (error) {
        dispatch(saveError("친구를 찾는 중 오류 발생했습니다."));
        console.error('Error finding friend:', error);
    } finally {
        dispatch(saveLoading(false));
    }
}

export const friendService = {
    insert,
    drop,
    findFriendList
}