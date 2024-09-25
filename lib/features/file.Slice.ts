// fileSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialFileState, FileModel, FileDeleteModel } from '../../app/model/file.model';

const fileSlice = createSlice({
    name: 'file',
    initialState: initialFileState,
    reducers: {
        saveFiles: (state, action: PayloadAction<FileModel[]>) => {
            state.files = action.payload;
        },
        saveCurrentFile: (state, action: PayloadAction<FileModel | null>) => {
            state.currentFile = action.payload;
        },
        saveFileToDelete: (state, action: PayloadAction<FileDeleteModel | null>) => {
            state.fileToDelete = action.payload;
        },
        addFile: (state, action: PayloadAction<FileModel>) => {
            state.files.push(action.payload);
        },
        removeFile: (state, action: PayloadAction<string>) => {
            state.files = state.files.filter(file => file.id !== action.payload);
        },
        upLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        endError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getFiles = (state:any) => state.files
export const getCurrentFile = (state:any) => state.currentFile
export const getFileToDelete = (state:any) => state.fileToDelete
export const getAddFile = (state:any) => state.files
export const getRemoveFile = (state:any) => state.files
export const getLoading = (state:any) => state.isLoading
export const getError = (state:any) => state.error


export const {
    saveFiles,
    saveCurrentFile,
    saveFileToDelete,
    addFile,
    removeFile,
    upLoading,
    endError,
} = fileSlice.actions;

export default fileSlice.reducer;