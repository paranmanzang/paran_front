import { FileDeleteModel, FileModel } from "@/app/model/file/file.model";
import api from "../axios";
import qs from "qs";

export const fileAPI = {
    findAll(refIdList: number[], type: string) {
        return api.get<FileModel[]>('', {
            params: { type: type, refIdList: refIdList },
            paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'repeat' })
        });
    },
    upload(file: any[], type: string, refId: number) {
        return api.post<FileModel>('', { FormData: { file: file, type: type, refId: refId } });
    },
    delete(fileModel: FileDeleteModel) {
        return api.delete<boolean>('', { data: fileModel });
    }
}

