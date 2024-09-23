import axios from 'axios';
import { ExceptionResponseModel } from '../../model/error/error';
import { AddressModel, AddressUpdateModel } from '../../model/room/room';

const api = axios.create({
    baseURL: 'http://localhost:8083/api/rooms/address',
});

// 주소 검색  --????
export const searchAddress = async (query: string): Promise<any> => {
    try {
      const response = await api.get('/search', {
        params: { query },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching address:', error);
      throw new Error('주소 검색 중 오류 발생');
    }
  };
  
  // 주소 등록
  export const saveAddress = async (addressModel: AddressModel): Promise<boolean | ExceptionResponseModel> => {
    try {
      const response = await api.post('/add', addressModel);
      return response.data;
    } catch (error) {
      console.error('Error saving address:', error);
      throw new Error('주소 저장 중 오류 발생');
    }
  };
  
  // 주소 수정
  export const updateAddress = async (addressModel: AddressUpdateModel): Promise<boolean| ExceptionResponseModel> => {
    try {
      const response = await api.put('/update', addressModel);
      return response.data;
    } catch (error) {
      console.error('Error updating address:', error);
      throw new Error('주소 수정 중 오류 발생');
    }
  };
  
  // 주소 삭제
  export const deleteAddress = async (id: number): Promise<boolean> => {
    try {
      const response = await api.delete(`/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting address:', error);
      throw new Error('주소 삭제 중 오류 발생');
    }
  };
  
  // 단일 주소 조회
  export const findById = async (id: number): Promise<AddressModel> => {
    try {
      const response = await api.get(`/one/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching address by id:', error);
      throw new Error('주소 조회 중 오류 발생');
    }
  };
  
  // 전체 주소 목록 조회
  export const getAddressList = async (): Promise<AddressModel> => {
    try {
      const response = await api.get('/list');
      return response.data;
    } catch (error) {
      console.error('Error fetching address list:', error);
      throw new Error('주소 목록 조회 중 오류 발생');
    }
  };
>>>>>>> 4feddb7b497bd86dc0cc520327c10d8ef7755c6d:app/service/room/address.service.ts
