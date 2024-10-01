
import { RoomModel, RoomUpdateModel } from '../../model/room.model';
import { ExceptionResponseModel } from '../../model/error.model';
import { AppDispatch } from '@/lib/store';
import { saveLoading, addRoom, updateRoom, saveRooms, removeRoom } from '@/lib/features/room.Slice';
import { roomAPI } from '@/app/api/generate/rooms.api';

// 공간 등록
export const saveRoom = async (roomModel: RoomModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.save(roomModel)
        dispatch(addRoom(response.data))
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
export const modifidRoom = async (roomModel: RoomUpdateModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.update(roomModel)
        dispatch(updateRoom(response.data));
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
export const deleteRoom = async (id: number, dispatch: AppDispatch): Promise<boolean> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.delete(id);
        dispatch(removeRoom(id))
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
export const findRoomsByUser = async (nickname: string, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findUser(nickname, page, size);
        dispatch(saveRooms(response.data.content))
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
export const findAllRooms = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findAll(page, size)
        dispatch(saveRooms(response.data.content))
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
// 승인된 공간 조회
export const findEnabledRooms = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findEnabled(page, size)
        dispatch(saveRooms(response.data.content))
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
export const confirmRoom = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.confirm(id)
        dispatch(updateRoom(response.data))
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
export const rejectRoom = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        const response = await roomAPI.reject(id);
        dispatch(removeRoom(id))
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