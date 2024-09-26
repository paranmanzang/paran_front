import api from '@/app/api/axios';
import requests from '@/app/api/requests';
import { ExceptionResponseModel } from '@/app/model/error.model';
import { GroupModel, GroupResponseModel, JoiningModel, PointModel, PointResponseModel } from '@/app/model/group/group.model';


//전체 그룹 조회
export const getGrouplist = async (page: number, size: number): Promise<GroupResponseModel[]> => {
    try {
        const response = await api.get<Page<GroupResponseModel>>(requests.fetchGroups + '/groups/grouplist', { params: { page, size } });
        return response.data.content;
    } catch (error: any) {
        console.error('Error fetching group list:', error.response?.data || error.message);
        throw new Error('소모임 조회 중 오류 발생');
    }
};

// 참여중인 소모임 조회
export const getGrouplistByUserNickname = async (nickname: string, page: number, size: number): Promise<GroupResponseModel[]> => {
    try {
        const response = await api.get<Page<GroupResponseModel>>(requests.fetchGroups + '/groups/mygrouplist', { params: { nickname, page, size } });
        return response.data.content;
    } catch (error: any) {
        console.error('Error fetching group list:', error.response?.data || error.message);
        throw new Error('참여 중인 소모임 조회 중 오류 발생');
    }
};

// 소모임 등록
export const addGroup = async (groupModel: GroupModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/plusgroup', groupModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding group:', error.response?.data || error.message);
        throw new Error('소모임 등록 중 오류 발생');
    }
};

// 소모임 승인 요청
export const enableGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminanswer', { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error enabling group:', error.response?.data || error.message);
        throw new Error('소모임 승인 요청 중 오류 발생');
    }
};

// 소모임 승인 취소
export const enableCancelGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminoutGroup', { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error canceling group approval:', error.response?.data || error.message);
        throw new Error('소모임 승인 취소 중 오류 발생');
    }
};

// 소모임 멤버 승인 취소
export const disableGroupMember = async (groupId: number, nickname: string): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminoutMember', { params: { groupId, nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error disabling group member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 승인 취소 중 오류 발생');
    }
};

// 소모임 참여중인 멤버 리스트
export const getGroupUserById = async (groupId: number): Promise<JoiningModel[]> => {
    try {
        const response = await api.get<JoiningModel[]>(requests.fetchGroups + `/groups/userlist/${groupId}`);
        return response.data;
    } catch (error: any) {
        console.error('Error disabling group member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 승인 취소 중 오류 발생');
    }
};

// 소모임에 채팅방 추가
export const updateChatRoomId = async (roomId: number, groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + `/groups/chatroomupdate/${groupId}`, { roomId });
        return response.data;
    } catch (error: any) {
        console.error('Error adding chat RoomId:', error.response?.data || error.message);
        throw new Error('소모임 채팅방 추가 중 오류 발생');
    }
};

// 소모임 멤버 추가
export const addMember = async (joiningModel: JoiningModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/plusmember', joiningModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 추가 중 오류 발생');
    }
};

// 소모임 멤버 승인
export const enableGroupMember = async (groupId: number, nickname: string): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/adminplusMember', { params: { groupId, nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error enabling group member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 승인 중 오류 발생');
    }
};


// 소모임 삭제
export const deleteGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/deleteGroup', { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error deleting group:', error.response?.data || error.message);
        throw new Error('소모임 삭제 중 오류 발생');
    }
};

// 소모임 포인트 적립
export const addPoint = async (pointModel: PointModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<Boolean | ExceptionResponseModel>(requests.fetchGroups + '/groups/pointup', pointModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 적립 중 오류 발생');
    }
};

// 소모임 포인트 조회
export const myGroupPoint = async (groupId: number): Promise<PointResponseModel[] | ExceptionResponseModel> => {
    try {
        const response = await api.get<PointResponseModel[] | ExceptionResponseModel>(`${requests.fetchGroups}/groups/mygrouppoint`, { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching group point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 조회 중 오류 발생');
    }
};

// 소모임 포인트 사용
export const usePoint = async (pointModel: PointModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<Boolean | ExceptionResponseModel>(`${requests.fetchGroups}/groups/usepoint`, pointModel);
        return response.data;
    } catch (error: any) {
        console.error('Error using point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 사용 중 오류 발생');
    }
};

// 소모임 포인트 취소
export const cancelPoint = async (pointId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete<Boolean | ExceptionResponseModel>(`${requests.fetchGroups}/groups/paymentcancel`, { params: { pointId } });
        return response.data;
    } catch (error: any) {
        console.error('Error canceling point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 취소 중 오류 발생');
    }
};

// 소모임 승인해야 하는 리스트 찾기
export const enableGroupList = async (page: number, size: number): Promise<GroupResponseModel[]> => {
    try {
        const response = await api.get<Page<GroupResponseModel>>(`${requests.fetchGroups}/groups/updateenablelist`, { params: { page, size } });
        return response.data.content;
    } catch (error: any) {
        console.error('Error finding enable group:', error.response?.data || error.message);
        throw new Error('승인해야하는 소모임 찾는 중 오류 발생');
    }
};