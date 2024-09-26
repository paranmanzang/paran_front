// errorSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorState, initialErrorState, ExceptionResponseModel } from '../../app/model/error.model';

const errorSlice = createSlice({
    name: 'error',
    initialState: initialErrorState,
    reducers: {
        saveCurrentError: (state, action: PayloadAction<ExceptionResponseModel | null>) => {
            state.currentError = action.payload;
            state.isError = action.payload !== null;
            if (action.payload) {
                state.errorHistory.push(action.payload);
            }
        },
        clearCurrentError: (state) => {
            state.currentError = null;
            state.isError = false;
        },
        addToErrorHistory: (state, action: PayloadAction<ExceptionResponseModel>) => {
            state.errorHistory.push(action.payload);
        },
        clearErrorHistory: (state) => {
            state.errorHistory = [];
        },
        saveIsError: (state, action: PayloadAction<boolean>) => {
            state.isError = action.payload;
        },
        saveGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.isGlobalLoading = action.payload;
        },
        saveGlobalError: (state, action: PayloadAction<string | null>) => {
            state.globalerror = action.payload;
        },
    },
});

export const getError = (state: any) => { state.currentError, state.isError }
export const getClearError = (state: any) => { state.currentError, state.isError }
export const getAddToError = (state: any) => state.errorHistory
export const getErrorHistory = (state: any) => state.errorHistory
export const getSaveError = (state: any) => state.isError


export const {
    saveCurrentError,
    clearCurrentError,
    addToErrorHistory,
    clearErrorHistory,
    saveIsError,
    saveGlobalLoading,
    saveGlobalError
} = errorSlice.actions;

export default errorSlice.reducer;