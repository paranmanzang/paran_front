import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error/error.model';
import { BookingModel } from '../../model/room/room';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/rooms/bookings',
});

// 예약 등록
export const saveBooking = async (bookingModel: BookingModel): Promise<boolean | ExceptionResponseModel> => {
  try {
    const response = await api.post('/add', bookingModel);
    return response.data;
  } catch (error) {
    console.error('Error saving booking:', error);
    throw new Error('예약 등록 중 오류 발생');
  }
};

// 예약 상태 업데이트 (승인)
export const saveState = async (id: number): Promise<boolean> => {
  try {
    const response = await api.put(`/state/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error updating booking state:', error);
    throw new Error('예약 승인 중 오류 발생');
  }
};

// 예약 거절 (삭제)
export const rejectBooking = async (id: number): Promise<boolean> => {
  try {
    const response = await api.delete(`/state/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error rejecting booking:', error);
    throw new Error('예약 거절 중 오류 발생');
  }
};

// 예약 삭제 (취소)
export const deleteBooking = async (id: number): Promise<boolean> => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw new Error('예약 삭제 중 오류 발생');
  }
};

// 소모임 예약 조회
export const findByGroupId = async (groupId: number): Promise<BookingModel[]> => {
  try {
    const response = await api.get(`/groups/list/${groupId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching group bookings:', error);
    throw new Error('소모임 예약 조회 중 오류 발생');
  }
};

// 공간 예약 조회
export const findByRoomId = async (roomId: number): Promise<BookingModel[]> => {
  try {
    const response = await api.get(`/rooms/list/${roomId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching room bookings:', error);
    throw new Error('공간 예약 조회 중 오류 발생');
  }
};

// 단일 예약 조회
export const findOneBooking = async (id: number): Promise<BookingModel> => {
  try {
    const response = await api.get(`/one/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching booking:', error);
    throw new Error('단일 예약 조회 중 오류 발생');
  }
};