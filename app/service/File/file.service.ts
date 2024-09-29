import { FileDeleteModel, FileModel } from '@/app/model/file.model';
import axios from 'axios';
import qs from 'qs';

const api = axios.create({
    baseURL: 'http://localhost:8090/api/files', // Spring Boot API 기본 URL
});

// 파일 리스트 조회
export const selectFileList = async (refIdList: number[], type: string): Promise<FileModel[][]> => {
    try {
        const response = await api.get<FileModel[][]>('/list', {
            params: { type: type, refIdList: refIdList },
            paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        });
        return response.data;
    } catch (error) {
        console.error('Error select files:', error);
        throw new Error('이미지 조회 중 오류 발생');
    }
};
// 파일 불러오기
export const loadFile = async (path: string): Promise<any> => {
    try {
        const response = await api.get('/one', { params: { path: path } });
        return response.data;
    } catch (error) {
        console.error('Error load file:', error);
        throw new Error('이미지 불러오기 중 오류 발생');
    }
};
// 파일 올리기
export const uploadFile = async (file: any[], type: string, refId: number): Promise<any> => {
    try {
        const response = await api.post('/upload', { FormData: { file: file, type: type, refId: refId } });
        return response.data;
    } catch (error) {
        console.error('Error load file:', error);
        throw new Error('이미지 불러오기 중 오류 발생');
    }
};

// 파일 삭제
export const deleteFile = async (fileDeleteModel: FileDeleteModel): Promise<boolean> => {
    try {
        const response = await api.delete('/delete', { data: fileDeleteModel });
        return response.data;
    } catch (error) {
        console.error('Error load file:', error);
        throw new Error('이미지 불러오기 중 오류 발생');
    }
};