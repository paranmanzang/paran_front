import { ReviewModel, ReviewUpdateModel } from '@/app/model/review.model';
import { AppDispatch } from '@/lib/store';
import { roomAPI } from '@/app/api/generate/rooms.api';
import { addReview, deleteReview, saveLoading, saveReviews, updateReview } from '@/lib/features/review.Slice';

// 리뷰 등록
export const saveReview = async (reviewModel: ReviewModel, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.saveReviewAPI(reviewModel);
    dispatch(addReview(response.data))

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
export const modifildReview = async (reviewModel: ReviewUpdateModel, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.modifidReviewAPI(reviewModel);
    dispatch(updateReview(response.data))
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
export const dropReview = async (id: number, dispatch: AppDispatch): Promise<boolean> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.dropReviewAPI(id)
    dispatch(deleteReview(id))
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
export const getAllReviews = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.findAllReviewAPI(page, size)
    dispatch(saveReviews(response.data.content))
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
export const getReviewsByRoom = async (roomId: number, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.findReviewByRoomAPI(roomId, page, size)
    dispatch(saveReviews(response.data.content))
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
export const getReviewsByUser = async (nickname: string, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.findReviewByUserAPI(nickname, page, size)
    dispatch(saveReviews(response.data.content))
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