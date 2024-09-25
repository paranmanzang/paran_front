import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState, UserModel } from "../../app/model/user.model"

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    saveCurrentUser: (state, action: PayloadAction<UserModel | null>) => {
      state.currentUser = action.payload;
    },
    saveUsers: (state, action: PayloadAction<UserModel[]>) => {
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
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const getCurrentUser = (state: any) => state.currentUser;
export const getUsers = (state: any) => state.users;
export const getIsLoading = (state: any) => state.isLoading;
export const getError = (state: any) => state.error;

// 액션 생성자들을 export
export const {
  saveCurrentUser,
  saveUsers,
  addUser,
  updateUser,
  deleteUser,
  saveLoading,
  saveError,
} = userSlice.actions;

// 리듀서를 export
export default userSlice.reducer;