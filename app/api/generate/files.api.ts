import { FileDeleteModel, FileModel } from "@/app/model/file.model";
import api from "../axios";
import qs from "qs";

export const fileAPI = {
    findFileListAPI: (refIdList: number[], type: string) => {
        return api.get<FileModel[]>('/list', {
            params: { type: type, refIdList: refIdList },
            paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })
        });
    },
    loadFileAPI: (path: string) => {
        return api.get('/one', { params: { path: path } });
    },
    uploadFilesAPI: (file: any[], type: string, refId: number) => {
        return api.post('/upload', { FormData: { file: file, type: type, refId: refId } });
    },
    deleteFileAPI: (fileModel: FileDeleteModel) => {
        return api.delete<boolean>('/delete', { data: fileModel });
    }
}