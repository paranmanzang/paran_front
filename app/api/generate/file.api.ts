import { FileDeleteModel, FileModel } from "@/app/model/file.model";
import api from "../axios";
import qs from "qs";

export const fileAPI = {
    findAll(refIdList: number[], type: string){
        return api.get<FileModel[]>('/list', {
            params: { type: type, refIdList: refIdList },
            paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })
        });
    },
    load(path: string){
        return api.get('/one', { params: { path: path } });
    },
    upload (file: any[], type: string, refId: number){
        return api.post<FileModel>('/upload', { FormData: { file: file, type: type, refId: refId } });
    },
    delete(fileModel: FileDeleteModel){
        return api.delete<boolean>('/delete', { data: fileModel });
    }
}