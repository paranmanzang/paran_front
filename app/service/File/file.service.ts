import { FileDeleteModel, FileModel } from '../../app/modelfile.model';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8090/api/files', // Spring Boot API 기본 URL
});

// 파일 리스트 조회
export const selectFileList = async (refId: number, type: string): Promise<FileModel[]> => {
    try {
        const response = await api.get('/list/' + refId, { params: { type: type } });
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
export const uploadFile = async (path: string): Promise<any> => {
    try {
        const response = await api.post('/upload',);
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