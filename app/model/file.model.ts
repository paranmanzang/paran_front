// fileTypes.ts
export enum FileType {
    USER = "user",
    ROOM = "room",
    ABOARD = "aBoard",
    GROUP_POST = "groupPost",
    BOOK = "book"
}
export interface FileModel {
    id: string;
    type: FileType;
    path: string;
    refId: number;
    uploadAt: Date;
}

export interface FileDeleteModel {
    path: string;
}

export interface FileState {
    userFiles: FileModel[];
    roomFiles: FileModel[];
    aboardFiles: FileModel[];
    groupPostFiles: FileModel[];
    bookFiles: FileModel[];
    currentFile: FileModel | null;
    fileToDelete: FileDeleteModel | null;
    isLoading: boolean;
    error: string | null;
}

export const initialFileState: FileState = {
    userFiles: [],
    roomFiles: [],
    aboardFiles: [],
    groupPostFiles: [],
    bookFiles: [],
    currentFile: null,
    fileToDelete: null,
    isLoading: false,
    error: null
};