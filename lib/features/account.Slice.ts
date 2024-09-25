import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAccountState, AccountResultModel, AccountCancelModel } from '../../app/model/account.model'
import { RootState } from '../store'

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setAccountResults: (state, action: PayloadAction<AccountResultModel[]>) => {
      state.accountResults = action.payload;
    },
    addAccountResult: (state, action: PayloadAction<AccountResultModel>) => {
      state.accountResults.push(action.payload);
    },
    setCurrentAccountResult: (state, action: PayloadAction<AccountResultModel | null>) => {
      state.currentAccountResult = action.payload;
    },
    setAccountCancels: (state, action: PayloadAction<AccountCancelModel[]>) => {
      state.accountCancels = action.payload;
    },
    addAccountCancel: (state, action: PayloadAction<AccountCancelModel>) => {
      state.accountCancels.push(action.payload);
    },
    setCurrentAccountCancel: (state, action: PayloadAction<AccountCancelModel | null>) => {
      state.currentAccountCancel = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

// Selector 함수들
export const getAccountResults = (state: RootState) => state.account.accountResults;
export const getCurrentAccountResult = (state: RootState) => state.account.currentAccountResult;
export const getAccountCancels = (state: RootState) => state.account.accountCancels;
export const getCurrentAccountCancel = (state: RootState) => state.account.currentAccountCancel;
export const getIsLoading = (state: RootState) => state.account.isLoading;
export const getError = (state: RootState) => state.account.error;

// 액션 생성자들을 export
export const {
  setAccountResults,
  addAccountResult,
  setCurrentAccountResult,
  setAccountCancels,
  addAccountCancel,
  setCurrentAccountCancel,
  setLoading,
  setError,
} = accountSlice.actions;

// 리듀서를 export
export default accountSlice.reducer;