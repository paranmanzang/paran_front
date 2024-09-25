// fileSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialFileState, FileModel, FileDeleteModel } from '../../app/model/file.model';
import { RootState } from '../store';

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

export const getFiles = (state: RootState) => state.file.files
export const getCurrentFile = (state: RootState) => state.file.currentFile
export const getFileToDelete = (state: RootState) => state.file.fileToDelete
export const getAddFile = (state: RootState) => state.file.files
export const getRemoveFile = (state: RootState) => state.file.files
export const getLoading = (state: RootState) => state.file.isLoading
export const getError = (state: RootState) => state.file.error


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