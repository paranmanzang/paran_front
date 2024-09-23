import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error/error';
import { CategoryModel } from '../../model/group/group';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/groups/newcategory',
});


// 카테고리 추가
export const addCategory = async (categoryModel: CategoryModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post('', categoryModel);
        return response.data;  // 성공 시 서버에서 받은 데이터를 반환
    } catch (error: any) {
        console.error('Error adding category:', error.response?.data || error.message);
        throw new Error('도서 추가 중 오류 발생');
    }
};
