import axios from 'axios';
import { RoomModel, RoomUpdateModel, RoomWTimeModel } from '../../model/room/room';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/rooms', // Spring Boot API 기본 URL
});

// 공간 등록
export const saveRoom = async (roomModel: RoomModel): Promise<boolean> => {
    try {
        const response = await api.post('/add', roomModel);
        return response.data;
    } catch (error) {
        console.error('Error saving room:', error);
        throw new Error('공간 등록 중 오류 발생');
    }
};

// 공간 수정
export const updateRoom = async (roomModel: RoomUpdateModel): Promise<boolean> => {
    try {
        const response = await api.put('/update', roomModel);
        return response.data;
    } catch (error) {
        console.error('Error updating room:', error);
        throw new Error('공간 수정 중 오류 발생');
    }
};

// 공간 삭제
export const deleteRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.delete(`/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting room:', error);
        throw new Error('공간 삭제 중 오류 발생');
    }
};

// 특정 닉네임의 공간 조회
export const findRoomsByUser = async (nickname: string): Promise<RoomModel[]> => {
    try {
        const response = await api.get(`/list/${nickname}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms by user:', error);
        throw new Error('유저 공간 조회 중 오류 발생');
    }
};

// 모든 공간 조회
export const findAllRooms = async (): Promise<RoomModel[]> => {
    try {
        const response = await api.get('/list');
        return response.data;
    } catch (error) {
        console.error('Error fetching all rooms:', error);
        throw new Error('공간 조회 중 오류 발생');
    }
};

// 단일 공간 조회
export const findRoomById = async (id: number): Promise<RoomWTimeModel> => {
    try {
        const response = await api.get(`/one/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching room by id:', error);
        throw new Error('단일 공간 조회 중 오류 발생');
    }
};

// 공간 승인
export const confirmRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.put(`/adminAnswer/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error confirming room:', error);
        throw new Error('공간 승인 중 오류 발생');
    }
};

// 공간 거절
export const rejectRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.delete(`/adminAnswer/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error rejecting room:', error);
        throw new Error('공간 거절 중 오류 발생');
    }
};