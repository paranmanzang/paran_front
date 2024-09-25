import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error.model';
import { BookResponseModel, LikeBookModel } from '../../app/modelgroup.model';

const api = axios.create({
    baseURL: 'http://localhost:8084/api/groups/likebook',
});

// 좋아요
export const likeBook = async (likeBookModel: LikeBookModel): Promise<Boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post(`/add`, likeBookModel);
        return response.data
    } catch (error) {
        console.error('Error adding likeBook:', error);
        throw new Error('좋아요 중 오류 발생');
    }
};

// 좋아요 취소
export const removeLikeBook = async (likeBookModel: LikeBookModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post('/remove', likeBookModel);
        return response.data;
    } catch (error) {
        console.error('Error adding likeBook:', error);
        throw new Error('좋아요 취소 중 오류 발생');
    }
};

// 좋아요 마이페이지 확인
export const getLikeRoomList = async (nickname: String): Promise<LikeBookModel[] | BookResponseModel> => {
    try {
        const response = await api.get(`/list/${nickname}`);
        return response.data;
    } catch (error) {
        console.error('Error finding likeBook:', error);
        throw new Error('내가 좋아하는 책 찾는 중 오류 발생');
    }
}