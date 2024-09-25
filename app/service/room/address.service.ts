import api from '../../api/axios';
import { ExceptionResponseModel } from '@/app/model/error.model';
import { AddressModel, AddressUpdateModel } from '@/app/model/room.model';
import requests from '@/app/api/requests';

// 주소 검색
export const searchAddress = async (query: string): Promise<AddressModel[]> => {
  try {
    const response = await api.get<AddressModel[]>(requests.fetchRooms + '/search', {
      params: { query },
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
      throw new Error('주소 검색 중 오류 발생');
    }
  }
};

// 주소 등록
export const saveAddress = async (addressModel: AddressModel): Promise<boolean | ExceptionResponseModel> => {
  try {
    const response = await api.post<boolean>(requests.fetchRooms + '/add', addressModel);
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
      throw new Error('주소 저장 중 오류 발생');
    }
  }
};

// 주소 수정
export const updateAddress = async (addressModel: AddressUpdateModel): Promise<boolean | ExceptionResponseModel> => {
  try {
    const response = await api.put<boolean>(requests.fetchRooms + '/update', addressModel);
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
      throw new Error('주소 수정 중 오류 발생');
    }
  }
};

// 주소 삭제
export const deleteAddress = async (id: number): Promise<boolean> => {
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
      throw new Error('주소 삭제 중 오류 발생');
    }
  }
};

// 단일 주소 조회
export const findById = async (id: number): Promise<AddressModel> => {
  try {
    const response = await api.get<AddressModel>(requests.fetchRooms + `/one/${id}`);
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
      throw new Error('주소 조회 중 오류 발생');
    }
  }
};

// 전체 주소 목록 조회
export const getAddressList = async (): Promise<AddressModel[]> => {
  try {
    const response = await api.get<AddressModel[]>(requests.fetchRooms + '/list');
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
      throw new Error('주소 목록 조회 중 오류 발생');
    }
  }
};