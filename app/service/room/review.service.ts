import { ReviewModel, ReviewUpdateModel } from '@/app/model/room.model';
import api from '../../api/axios';
import requests from '@/app/api/requests';

// 리뷰 등록
export const saveReview = async (reviewModel: ReviewModel): Promise<boolean> => {
  try {
    const response = await api.post<boolean>(requests.fetchRooms + '/add', reviewModel);
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
      throw new Error('리뷰 등록 중 오류 발생');
    }
  }
};

// 리뷰 수정
export const updateReview = async (reviewModel: ReviewUpdateModel): Promise<boolean> => {
  try {
    const response = await api.put<boolean>(requests.fetchRooms + '/update', reviewModel);
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
      throw new Error('리뷰 수정 중 오류 발생');
    }
  }
};

// 리뷰 삭제
export const deleteReview = async (id: number): Promise<boolean> => {
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
      throw new Error('리뷰 삭제 중 오류 발생');
    }
  }
};

// 모든 리뷰 조회
export const getAllReviews = async (page: number, size: number): Promise<ReviewModel[]> => {
  try {
    const response = await api.get<Page<ReviewModel>>(requests.fetchRooms + '/list', { param: { page, size } });
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
      throw new Error('리뷰 조회 중 오류 발생');
    }
  }
};

// 공간 기준 리뷰 조회
export const getReviewsByRoom = async (roomId: number, page: number, size: number): Promise<ReviewModel[]> => {
  try {
    const response = await api.get<Page<ReviewModel>>(requests.fetchRooms + `/list/rooms/${roomId}`, { param: { page, size } });
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
      throw new Error('공간 리뷰 조회 중 오류 발생');
    }
  }
};