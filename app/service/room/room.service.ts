
import { RoomModel, RoomUpdateModel } from '../../model/room/room.model';
import { AppDispatch } from '@/lib/store';
import { saveLoading, addRoom, updateRoom, saveRooms, removeRoom, saveError, saveLikedRooms, saveAllRooms } from '@/lib/features/room/room.slice';
import { roomAPI } from '@/app/api/generate/room.api';
import { FileType } from '@/app/model/file/file.model';
import { fileService } from '../file/file.service';

// 공간 등록
const save = async (roomModel: RoomModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.insert(roomModel)
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
const modify = async (roomModel: RoomUpdateModel, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.modify(roomModel)
        console.log(response)
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
}
// 공간 삭제, 공간 승인 거절
const drop = async (id: number, dispatch: AppDispatch): Promise<boolean> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.drop(id);
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
const findByUser = async (nickname: string, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findByUser(nickname, page, size);
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

// 전체 공간 조회 -> admin 에서 볼 수 있음. 
const findAll = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
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

// 승인된 공간 전체 조회
const findAllByEnabled = async (dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findAllByEnabled()
        fileService.selectFileList(response.data.map((room) => room.id).filter((id): id is number => id !== undefined), FileType.ROOM, dispatch);
        dispatch(saveAllRooms(response.data))
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
}
// 승인된 공간 조회-페이지네이션
const findByEnabled = async (page: number, size: number, dispatch: AppDispatch): Promise<any> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.findByEnabled(page, size)

        //console.log("findByEnabled - service await 부분임",response.data.content)
        dispatch(saveRooms(response.data.content))
        fileService.selectFileList(
            response.data.content.map((room: RoomModel) => room.id)
            .filter((id): id is number => id !== undefined), 
            FileType.ROOM, dispatch)
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
}

// 공간승인
const modifyConfirm = async (id: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true))
        const response = await roomAPI.modifyConfirm(id)
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
}

// 좋아요한 공간 조회
const findAllByUserNickname = async (nickname: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await roomAPI.findLikeRoomList(nickname)
        console.log("좋아요한 공간: ", response)
        if (response.data !== null) {
            dispatch(saveLikedRooms(response.data))
        }
    } catch (error) {
        dispatch(saveError("찜한 공간을 찾는 중 오류 발생했습니다."));
        console.error('Error finding likeRoom:', error);
    } finally {
        dispatch(saveLoading(false));
    }
}

export const roomService = {
    save, modify, drop,
    findByUser, findAll, findAllByEnabled, findByEnabled, findAllByUserNickname, modifyConfirm
}