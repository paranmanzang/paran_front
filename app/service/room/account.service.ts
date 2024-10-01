import { roomAPI } from '@/app/api/generate/rooms.api';
import api from '../../api/axios';
import requests from '@/app/api/requests';
import { AccountCancelModel, AccountModel, AccountResultModel } from '@/app/model/account.model';
import { AppDispatch } from '@/lib/store';
import { ANONYMOUS, TossPaymentsPayment } from '@tosspayments/tosspayments-sdk';
import { saveLoading } from '@/lib/features/account.Slice';

export const loadTossPaymentsSet = async (dispath: AppDispatch): Promise<TossPaymentsPayment> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.loadTossPaymentsAPI();
    return response.payment({ customerKey: ANONYMOUS });
  } catch (error: any) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error('서버에서 오류가 발생했습니다.');
    } else if (error.request) {
      console.error('No Response:', error.request);
      throw new Error('서버 응답이 없습니다.');
    } else {
      console.error('Error:', error.message);
      throw new Error('결제 로드 중 오류 발생');
    }
  }
}
// 결제 정보 저장
export const savePayment = async (model: AccountResultModel, dispath: AppDispatch): Promise<boolean> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.savePaymentAPI(model);
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
export const findByOrderId = async (orderId: string, dispath: AppDispatch): Promise<string> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.findByOrderIdAPI(orderId)
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
export const cancelPayment = async (model: AccountCancelModel, dispath: AppDispatch): Promise<boolean> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.cancelPaymentAPI(model)
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

// 예약 정보로 결제 정보 조회
export const findByBooking = async (bookingId: number, page: number, size: number, dispath: AppDispatch): Promise<AccountModel> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.findByBookingAPI(bookingId, page, size);
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
// 소모임 정보로 결제 리스트 조회
export const findByGroup = async (groupId: number, page: number, size: number, dispath: AppDispatch): Promise<AccountModel[]> => {
  try {
    dispath(saveLoading(true))
    const response = await roomAPI.findByGroupAPI(groupId, page, size);
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
      throw new Error('결제 정보 조회 중 오류 발생');
    }
  }
};
// 공간 정보로 결제 리스트 조회
export const findByRoom = async (roomId: number, page: number, size: number, dispath: AppDispatch): Promise<AccountModel[]> => {
  try {
    dispath(saveLoading(true))
    const response = await api.get<Page<AccountModel>>(requests.fetchRooms + `/accounts/list/rooms/${roomId}`, { params: { page, size } });
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
      throw new Error('결제 정보 조회 중 오류 발생');
    }
  }
};