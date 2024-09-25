import api from '../../api/axios';
import { AccountCancelModel, AccountResultModel } from '@/app/model/room.model';
import requests from '@/app/api/requests';

// 결제 정보 저장
export const savePayment = async (model: AccountResultModel): Promise<boolean> => {
  try {
    const response = await api.post<boolean>(requests.fetchRooms + '/success', model);
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
      throw new Error('결제 저장 중 오류 발생');
    }
  }
};

// 주문번호로 결제 정보 조회
export const findByOrderId = async (orderId: string): Promise<string> => {
  try {
    const response = await api.get<string>(requests.fetchRooms + '/findPayment', {
      params: { orderId },
    });
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
      throw new Error('결제 정보 조회 중 오류 발생');
    }
  }
};

// 결제 취소
export const cancelPayment = async (model: AccountCancelModel): Promise<boolean> => {
  try {
    const response = await api.put<boolean>(requests.fetchRooms + '/cancel', model);
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
      throw new Error('결제 취소 중 오류 발생');
    }
  }
};