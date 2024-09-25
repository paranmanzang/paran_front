import axios from 'axios';
import { AccountCancelModel, AccountResultModel } from '../../model/account.model';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/account',
  });

  // 결제 정보 저장 
export const savePayment = async (model: AccountResultModel): Promise<boolean> => {
    try {
      const response = await api.post('/success', model);
      return response.data;
    } catch (error) {
      console.error('Error saving payment:', error);
      throw new Error('결제 저장 중 오류 발생');
    }
  };
  
  // 주문번호로 결제 정보 조회
  export const findByOrderId = async (orderId: string): Promise<String> => {
    try {
      const response = await api.get('/findPayment', {
        params: { orderId },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching payment by orderId:', error);
      throw new Error('결제 정보 조회 중 오류 발생');
    }
  };
  
  // 결제 취소
  export const cancelPayment = async (model: AccountCancelModel): Promise<Boolean> => {
    try {
      const response = await api.put('/cancel', model);
      return response.data;
    } catch (error) {
      console.error('Error canceling payment:', error);
      throw new Error('결제 취소 중 오류 발생');
    }
  };