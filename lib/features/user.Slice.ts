import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialUserState, UserModel } from "../../app/model/user.model"
import { RootState } from '../store';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<UserModel | null>) => {
      state.currentUser = action.payload;
    },
    setUsers: (state, action: PayloadAction<UserModel[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<UserModel>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<UserModel>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const getCurrentUser = (state: RootState) => state.user.currentUser;
export const getUsers = (state: RootState) => state.user.users;
export const getIsLoading = (state: RootState) => state.user.isLoading;
export const getError = (state: RootState) => state.user.error;

// 액션 생성자들을 export
export const {
  setCurrentUser,
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setLoading,
  setError,
} = userSlice.actions;

// 리듀서를 export
export default userSlice.reducer;