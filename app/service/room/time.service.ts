import api from "@/app/api/axios";
import { roomAPI } from "@/app/api/generate/rooms.api";
import requests from "@/app/api/requests";
import { TimeModel } from "@/app/model/room.model";
import { saveLoading } from "@/lib/features/room.Slice";
import { AppDispatch } from "@/lib/store";

export const getTimeList = async (roomId: number, dispatch: AppDispatch): Promise<TimeModel[]> => {
    try {
        dispatch(saveLoading(true));
        const response = await roomAPI.findTimeListAPI(roomId)
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