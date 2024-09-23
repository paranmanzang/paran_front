import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error/error';
import { BookModel } from '../../model/group/group';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/groups/books',
});

// 도서명으로 카테고리 조회
export const searchCategoryByBookTitle = async (bookTitle: string): Promise<string | ExceptionResponseModel> => {
    try {
        const response = await api.get(`/category`, { params: { bookTitle } });
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw new Error('카테고리 조회 중 오류 발생');
    }
};

// 도서 추가
export const addBook = async (bookModel: BookModel): Promise<boolean | ExceptionResponseModel> => {
    try {
        const response = await api.post('/add', bookModel);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw new Error('도서 추가 중 오류 발생');
    }
};