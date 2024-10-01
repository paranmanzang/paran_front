import {GroupModel, JoiningModel} from '@/app/model/group/group.model';
import {groupsAPI} from "@/app/api/generate/groups.api";
import {
    addGroupMember,
    deleteGroup,
    deleteGroupMember,
    saveError,
    saveGroupMembers,
    saveGroups,
    saveLoading,
    updateGroup,
} from "@/lib/features/group/group.Slice";
import {AppDispatch} from "@/lib/store";


//전체 그룹 조회
export const findGroupList = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findGroupList(page, size)
        dispatch(saveGroups(response.data.content))
    } catch (error: any) {
        dispatch(saveError("소모임 조회 중 오류 발생했습니다."));
        console.error('Error fetching group list:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 참여중인 소모임 조회
export const findGroupListByNickname = async (nickname: string, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findGroupListByNickname(nickname, page, size)
        dispatch(saveGroups(response.data.content))
    } catch (error: any) {
        dispatch(saveError("참여 중인 소모임 조회 중 오류 발생했습니다."));
        console.error('Error fetching group list:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 등록 => userSlice
export const insertGroup = async (groupModel: GroupModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.insertGroup(groupModel)
    } catch (error: any) {
        dispatch(saveError("소모임 등록 중 오류 발생했습니다."));
        console.error('Error adding group:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 승인 요청 => userSlice
export const enableGroup = async (groupId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.enableGroup(groupId)
    } catch (error: any) {
        dispatch(saveError("소모임 승인 요청 중 오류 발생했습니다."));
        console.error('Error enabling group:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 승인 취소 => userSlice
export const enableCancelGroup = async (groupId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.enableCancelGroup(groupId)
    } catch (error: any) {
        dispatch(saveError("소모임 승인 취소 중 오류 발생했습니다."));
        console.error('Error canceling group approval:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 멤버 승인 취소
export const disableGroupMember = async (groupId: number, nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.disableGroupMember(groupId, nickname)
        dispatch(deleteGroupMember({groupId, nickname}));
    } catch (error: any) {
        dispatch(saveError("소모임 멤버 승인 취소 중 오류 발생했습니다."));
        console.error('Error disabling group member:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 참여중인 멤버 리스트
export const findGroupUserById = async (groupId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findGroupUserById(groupId)
        dispatch(saveGroupMembers(response.data))
    } catch (error: any) {
        dispatch(saveError("소모임 멤버 승인 취소 중 오류 발생했습니다."));
        console.error('Error disabling group member:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임에 채팅방 추가
export const updateChatRoomId = async (roomId: number, groupId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.updateChatRoomId(roomId, groupId)
        if ('id' in response.data && 'name' in response.data) {
            dispatch(updateGroup(response.data));
        }
    } catch (error: any) {
        dispatch(saveError("소모임 채팅방 추가 중 오류 발생했습니다."));
        console.error('Error adding chat RoomId:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 멤버 추가
export const addMember = async (joiningModel: JoiningModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.addMember(joiningModel)
        if ('groupId' in response.data && 'nickname' in response.data) {
            dispatch(addGroupMember(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("소모임 멤버 추가 중 오류 발생했습니다."));
        console.error('Error adding member:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 멤버 승인
export const enableGroupMember = async (groupId: number, nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.enableGroupMember(groupId, nickname)
        if ('groupId' in response.data && 'nickname' in response.data) {
            dispatch(addGroupMember(response.data))
        }
    } catch (error: any) {
        dispatch(saveError("소모임 멤버 승인 중 오류 발생했습니다."));
        console.error('Error enabling group member:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};


// 소모임 삭제
export const dropGroup = async (groupId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.deleteGroup(groupId)
        dispatch(deleteGroup(groupId))
    } catch (error: any) {
        dispatch(saveError("소모임 삭제 중 오류 발생했습니다."));
        console.error('Error deleting group:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 승인해야 하는 리스트 찾기 => userSlice
export const enableGroupList = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.enableGroupList(page, size)
    } catch (error: any) {
        dispatch(saveError("승인해야하는 소모임 찾는 중 오류 발생했습니다."));
        console.error('Error finding enable group:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};

// 소모임 나가기
export const exitGroup = async (nickname:string,groupId:number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.exitGroup(nickname,groupId)
        dispatch(deleteGroupMember({groupId,nickname}))
    } catch (error: any) {
        dispatch(saveError("소모임을 탈퇴하는 중 오류 발생했습니다."));
        console.error('Error exiting group:', error.response?.data || error.message);
    } finally {
        dispatch(saveLoading(false));
    }
};
