// fileTypes.ts
export interface FileModel {
    id: string;
    type: string;
    path: string;
    refId: number;
    uploadAt: Date;
}

export interface FileDeleteModel {
    path: string;
}

// 상태 인터페이스 정의
export interface FileState {
    files: FileModel[][];
    currentFile: FileModel | null;
    fileToDelete: FileDeleteModel | null;
    isLoading: boolean;
    error: string | null;
}

// 초기 상태
export const initialFileState: FileState = {
    files: [],
    currentFile: null,
    fileToDelete: null,
    isLoading: false,
    error: null
};