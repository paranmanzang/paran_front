import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAccountState, AccountResultModel, AccountCancelModel } from '../../app/model/account.model'

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    saveAccountResults: (state, action: PayloadAction<AccountResultModel[]>) => {
      state.accountResults = action.payload;
    },
    addAccountResult: (state, action: PayloadAction<AccountResultModel>) => {
      state.accountResults.push(action.payload);
    },
    saveCurrentAccountResult: (state, action: PayloadAction<AccountResultModel | null>) => {
      state.currentAccountResult = action.payload;
    },
    saveAccountCancels: (state, action: PayloadAction<AccountCancelModel[]>) => {
      state.accountCancels = action.payload;
    },
    addAccountCancel: (state, action: PayloadAction<AccountCancelModel>) => {
      state.accountCancels.push(action.payload);
    },
    saveCurrentAccountCancel: (state, action: PayloadAction<AccountCancelModel | null>) => {
      state.currentAccountCancel = action.payload;
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Selector 함수들
export const getAccountResults = (state: any) => state.accountResults;
export const getCurrentAccountResult = (state: any) => state.currentAccountResult;
export const getAccountCancels = (state: any) => state.accountCancels;
export const getCurrentAccountCancel = (state: any) => state.currentAccountCancel;
export const getIsLoading = (state: any) => state.isLoading;
export const getError = (state: any) => state.error;

// 액션 생성자들을 export
export const {
  saveAccountResults,
  addAccountResult,
  saveCurrentAccountResult,
  saveAccountCancels,
  addAccountCancel,
  saveCurrentAccountCancel,
  saveLoading,
  saveError,
} = accountSlice.actions;

// 리듀서를 export
export default accountSlice.reducer;