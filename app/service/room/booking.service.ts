import { roomAPI } from '@/app/api/generate/rooms.api';
import api from '../../api/axios';
import requests from '@/app/api/requests';
import { BookingModel } from '@/app/model/bookings.model';
import { AppDispatch } from '@/lib/store';
import { addBooking, deleteBooking, saveBookings, saveLoading, updateBooking } from '@/lib/features/bookings.Slice';

// 예약 등록
export const saveBooking = async (bookingModel: BookingModel, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.saveBookingAPI(bookingModel);
    dispatch(addBooking(response.data))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};

// 예약 상태 업데이트 (승인)
export const saveState = async (id: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.saveStateAPI(id)
    dispatch(updateBooking(response.data))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};

// 예약 거절 (삭제)
export const rejectBooking = async (id: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.rejectBookingAPI(id)
    dispatch(deleteBooking(id))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};

// 예약 삭제 (취소)
export const dropBooking = async (id: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.dropBookingAPI(id)
    dispatch(deleteBooking(id))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};

// 소모임 예약 조회
export const findByGroupId = async (groupId: number, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.findByGroupIdAPI(groupId, page, size)
    dispatch(saveBookings(response.data.content))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};

// 공간 예약 조회
export const findByRoomId = async (roomId: number, page: number, size: number, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await roomAPI.findByRoomIdAPI(roomId, page, size)
    dispatch(saveBookings(response.data.content))
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('요청 중 오류 발생');
    }
  }
};
