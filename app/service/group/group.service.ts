import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error.model';
import { GroupModel, GroupResponseModel, JoiningModel, PointModel, PointResponseModel } from '../../app/modelgroup.model';

const api = axios.create({
    baseURL: 'http://localhost:8084/api/groups/groups',
});

//전체 그룹 조회
export const getGrouplist = async (): Promise<GroupResponseModel[]> => {
    try {
        const response = await api.get(`/grouplist`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching group list:', error.response?.data || error.message);
        throw new Error('소모임 조회 중 오류 발생');
    }
};

// 참여중인 소모임 조회
export const getGrouplistByUserNickname = async (nickname: string): Promise<GroupResponseModel[] | ExceptionResponseModel> => {
    try {
        const response = await api.get(`/mygrouplist`, { params: { nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching group list:', error.response?.data || error.message);
        throw new Error('참여 중인 소모임 조회 중 오류 발생');
    }
};

// 소모임 등록
export const addGroup = async (groupModel: GroupModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post(`/plusgroup`, groupModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding group:', error.response?.data || error.message);
        throw new Error('소모임 등록 중 오류 발생');
    }
};

// 소모임 승인 요청
export const enableGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put(`/adminanswer`, null, { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error enabling group:', error.response?.data || error.message);
        throw new Error('소모임 승인 요청 중 오류 발생');
    }
};

// 소모임 승인 취소
export const enableCancelGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put(`/adminoutGroup`, null, { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error canceling group approval:', error.response?.data || error.message);
        throw new Error('소모임 승인 취소 중 오류 발생');
    }
};

// 소모임장 등록
export const addLeader = async (groupId: number, nickname: string): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put(`/addleader`, null, { params: { groupId, nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error adding leader:', error.response?.data || error.message);
        throw new Error('소모임장 등록 중 오류 발생');
    }
};

// 소모임 멤버 추가
export const addMember = async (joiningModel: JoiningModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post(`/plusmember`, joiningModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 추가 중 오류 발생');
    }
};

// 소모임 멤버 승인
export const enableGroupMember = async (groupId: number, nickname: string): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put(`/adminplusMember`, null, { params: { groupId, nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error enabling group member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 승인 중 오류 발생');
    }
};

// 소모임 멤버 승인 취소
export const disableGroupMember = async (groupId: number, nickname: string): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put(`/adminoutMember`, null, { params: { groupId, nickname } });
        return response.data;
    } catch (error: any) {
        console.error('Error disabling group member:', error.response?.data || error.message);
        throw new Error('소모임 멤버 승인 취소 중 오류 발생');
    }
};

// 소모임 삭제
export const deleteGroup = async (groupId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete(`/deleteGroup`, { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error deleting group:', error.response?.data || error.message);
        throw new Error('소모임 삭제 중 오류 발생');
    }
};

// 소모임 포인트 적립
export const addPoint = async (pointModel: PointModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post(`/pointup`, pointModel);
        return response.data;
    } catch (error: any) {
        console.error('Error adding point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 적립 중 오류 발생');
    }
};

// 소모임 포인트 조회
export const myGroupPoint = async (groupId: number): Promise<PointResponseModel[] | ExceptionResponseModel> => {
    try {
        const response = await api.get(`/mygrouppoint`, { params: { groupId } });
        return response.data;
    } catch (error: any) {
        console.error('Error fetching group point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 조회 중 오류 발생');
    }
};

// 소모임 포인트 사용
export const usePoint = async (pointModel: PointModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post(`/usepoint`, pointModel);
        return response.data;
    } catch (error: any) {
        console.error('Error using point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 사용 중 오류 발생');
    }
};

// 소모임 포인트 취소
export const cancelPoint = async (pointId: number): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete(`/paymentcancel`, { params: { pointId } });
        return response.data;
    } catch (error: any) {
        console.error('Error canceling point:', error.response?.data || error.message);
        throw new Error('소모임 포인트 취소 중 오류 발생');
    }
};