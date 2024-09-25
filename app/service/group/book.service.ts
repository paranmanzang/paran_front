import api from '@/app/api/axios';
import requests from '@/app/api/requests';
import { BookResponseModel } from '@/app/model/group.model';

// 도서명으로 카테고리 조회
export const findBookList = async (page: number, size: number): Promise<BookResponseModel[]> => {
    try {
        const response = await api.get<BookResponseModel[]>(requests.fetchGroups+`/books`, {
            params: {
              page, 
              size  
            }
          });
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw new Error('카테고리 조회 중 오류 발생');
    }
};