import axios from 'axios';
import { ReviewModel, ReviewUpdateModel } from '../../model/review/review';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/reviews', 
  });

// 리뷰 등록
export const saveReview = async (reviewModel: ReviewModel): Promise<boolean> => {
    try {
      const response = await api.post('/add', reviewModel);
      return response.data;
    } catch (error) {
      console.error('Error saving review:', error);
      throw new Error('리뷰 등록 중 오류 발생');
    }
  };
  
  // 리뷰 수정
  export const updateReview = async (reviewModel: ReviewUpdateModel): Promise<boolean> => {
    try {
      const response = await api.put('/update', reviewModel);
      return response.data;
    } catch (error) {
      console.error('Error updating review:', error);
      throw new Error('리뷰 수정 중 오류 발생');
    }
  };
  
  // 리뷰 삭제
  export const deleteReview = async (id: number): Promise<boolean> => {
    try {
      const response = await api.delete(`/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting review:', error);
      throw new Error('리뷰 삭제 중 오류 발생');
    }
  };
  
  // 모든 리뷰 조회
  export const getAllReviews = async (): Promise<ReviewModel[]> => {
    try {
      const response = await api.get('/list');
      return response.data;
    } catch (error) {
      console.error('Error fetching all reviews:', error);
      throw new Error('리뷰 조회 중 오류 발생');
    }
  };
  
  // 공간 기준 리뷰 조회
  export const getReviewsByRoom = async (roomId: number): Promise<ReviewModel[]> => {
    try {
      const response = await api.get(`/list/rooms/${roomId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching room reviews:', error);
      throw new Error('공간 리뷰 조회 중 오류 발생');
    }
  };
  
  // 단일 리뷰 조회
  export const getReviewById = async (id: number): Promise<ReviewModel> => {
    try {
      const response = await api.get(`/one/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching review:', error);
      throw new Error('단일 리뷰 조회 중 오류 발생');
    }
  };