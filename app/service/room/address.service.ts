import { AddressModel, AddressUpdateModel } from '@/app/model/address.model';
import { AppDispatch } from '@/lib/store';
import { addAddress, deleteAddress, saveAddresses, saveLoading, updateAddress } from '@/lib/features/address.Slice';
import { addressAPI } from '@/app/api/generate/addresses.api';

// 주소 검색
export const searchAddress = async (query: string, dispatch: AppDispatch): Promise<AddressModel[]> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.search(query)
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
export const insertAddress = async (addressModel: AddressModel, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.save(addressModel)
    dispatch(addAddress(response.data))
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
export const modifidAddress = async (addressModel: AddressUpdateModel, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.update(addressModel)
    dispatch(updateAddress(response.data))
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
export const dropAddress = async (id: number, dispatch: AppDispatch): Promise<boolean> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.delete(id)
    dispatch(deleteAddress(id))
    return response.data
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

// 전체 주소 목록 조회
export const getAddressList = async (dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.findAddresses();
    dispatch(saveAddresses(response.data))
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

// 자체 주소 검색
export const findQuery = async (query: string, dispatch: AppDispatch): Promise<void> => {
  try {
    dispatch(saveLoading(true))
    const response = await addressAPI.findQuery(query)
    dispatch(saveAddresses(response.data))
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