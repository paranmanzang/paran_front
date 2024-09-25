
import { RoomModel, RoomUpdateModel, RoomWTimeModel } from '../../model/room.model';
import { ExceptionResponseModel } from '../../model/error.model';
import api from '../../api/axios';
import requests from '@/app/api/requests';

// 공간 등록
export const saveRoom = async (roomModel: RoomModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<boolean>(requests.fetchRooms + '/add', roomModel);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};

// 공간 수정
export const updateRoom = async (roomModel: RoomUpdateModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.put<boolean>(requests.fetchRooms + '/update', roomModel);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};
// 공간 삭제
export const deleteRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.delete<boolean>(requests.fetchRooms + `/delete/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};
// 등록자에 대한 공간 조회
export const findRoomsByUser = async (nickname: string, page: number, size: number): Promise<RoomModel[]> => {
    try {
        const response = await api.get<RoomModel[]>(requests.fetchRooms + `/list/${nickname}`, { params: { page, size } });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};

// 전체 공간 조회
export const findAllRooms = async (page: number, size: number): Promise<RoomModel[]> => {
    try {
        const response = await api.get<RoomModel[]>(requests.fetchRooms + '/list', { params: { page, size } });
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};

//단일 공간 조회
export const findRoomById = async (id: number): Promise<RoomWTimeModel> => {
    try {
        const response = await api.get<RoomWTimeModel>(requests.fetchRooms + `/one/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};
// 공간승인
export const confirmRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.put<boolean>(requests.fetchRooms + `/adminAnswer/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};

//공간거절
export const rejectRoom = async (id: number): Promise<boolean> => {
    try {
        const response = await api.delete<boolean>(requests.fetchRooms + `/adminAnswer/${id}`);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            throw new Error('서버에서 오류가 발생했습니다.');
        } else if (error.request) {
            console.error('No Response:', error.request);
            throw new Error('서버 응답이 없습니다.');
        } else {
            console.error('Error:', error.message);
            throw new Error('요청 설정 중 오류가 발생했습니다.');
        }
    }
};