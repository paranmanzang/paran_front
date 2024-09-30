
import { RoomModel, RoomUpdateModel } from '../../model/room.model';
import { ExceptionResponseModel } from '../../model/error.model';
import { AppDispatch } from '@/lib/store';
import { saveLoading } from '@/lib/features/room.Slice';
import { roomAPI } from '@/app/api/generate/api.rooms';

// 공간 등록
export const saveRoom = async (roomModel: RoomModel, dispatch: AppDispatch): Promise<RoomModel | ExceptionResponseModel> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.saveRoomAPI(roomModel)
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
export const updateRoom = async (roomModel: RoomUpdateModel, dispatch: AppDispatch): Promise<RoomModel | ExceptionResponseModel> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.updateRoomAPI(roomModel)
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
export const deleteRoom = async (id: number, dispatch: AppDispatch): Promise<boolean> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.deleteRoomAPI(id);
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
export const findRoomsByUser = async (nickname: string, page: number, size: number, dispatch: AppDispatch): Promise<RoomModel[]> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findRoomsByUserAPI(nickname, page, size);
        return response.data.content;
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
export const findAllRooms = async (page: number, size: number, dispatch: AppDispatch): Promise<RoomModel[]> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findRoomListAPI(page, size)
        return response.data.content;
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
export const findEnabledRooms = async (page: number, size: number, dispatch: AppDispatch): Promise<RoomModel[]> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findEnabledRoomsAPI(page, size)
        return response.data.content;
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
export const confirmRoom = async (id: number, dispatch: AppDispatch): Promise<RoomModel> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.confirmRoomAPI(id)
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
        const response = await roomAPI.rejectRoomAPI(id);
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