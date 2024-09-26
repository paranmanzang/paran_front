import api from '@/app/api/axios';
import requests from '@/app/api/requests';
import { ExceptionResponseModel } from '@/app/model/error.model';
import { BookResponseModel } from '@/app/model/group/book.model';
import { LikeBookModel } from '@/app/model/group/book.model';

// 좋아요
export const likeBook = async (likeBookModel: LikeBookModel
): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post<Boolean | ExceptionResponseModel>(requests.fetchGroups + `/likebook/add`, likeBookModel);
        return response.data
    } catch (error) {
        console.error('Error adding likeBook:', error);
        throw new Error('좋아요 중 오류 발생');
    }
};

// 좋아요 취소
export const removeLikeBook = async (likeBookModel: LikeBookModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.delete<boolean | ExceptionResponseModel>(requests.fetchGroups + '/likebook/remove', likeBookModel);
        return response.data;
    } catch (error) {
        console.error('Error adding likeBook:', error);
        throw new Error('좋아요 취소 중 오류 발생');
    }
};

// 좋아요 마이페이지 확인
export const getLikeRoomList = async (nickname: String, page: number, size: number): Promise<LikeBookModel[]> => {
    try {
        const response = await api.get<Page<LikeBookModel>>(requests.fetchGroups + `/likebook/list/${nickname}`);
        return response.data.content;
    } catch (error) {
        console.error('Error finding likeBook:', error);
        throw new Error('내가 좋아하는 책 찾는 중 오류 발생');
    }
}