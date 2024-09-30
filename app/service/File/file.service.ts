import { fileAPI } from '@/app/api/generate/files.api';
import { FileDeleteModel } from '@/app/model/file.model';
import { addFile, removeFile, saveFiles, upLoading } from '@/lib/features/file.Slice';
import { AppDispatch } from '@/lib/store';
import axios from 'axios';
import qs from 'qs';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/files', // Spring Boot API 기본 URL
});

// 파일 리스트 조회
export const selectFileList = async (refIdList: number[], type: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(upLoading(true))
        const response = await fileAPI.findFileListAPI(refIdList, type);
        dispatch(saveFiles(response.data))
    } catch (error) {
        console.error('Error select files:', error);
        throw new Error('이미지 조회 중 오류 발생');
    }
};

// 파일 올리기
export const uploadFile = async (file: any[], type: string, refId: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(upLoading(true))
        const response = await fileAPI.uploadFilesAPI(file, type, refId)
        dispatch(addFile(response.data))
    } catch (error) {
        console.error('Error load file:', error);
        throw new Error('이미지 불러오기 중 오류 발생');
    }
};

// 파일 삭제
export const deleteFile = async (fileDeleteModel: FileDeleteModel, type: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(upLoading(true))
        const response = await fileAPI.deleteFileAPI(fileDeleteModel)
        dispatch(removeFile(fileDeleteModel.path, type))
    } catch (error) {
        console.error('Error load file:', error);
        throw new Error('이미지 불러오기 중 오류 발생');
    }
};