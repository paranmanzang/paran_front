import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialUserState, UserModel } from "../../../app/model/user/user.model"
import { RootState } from '@/lib/store';

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
      const index = state.users.findIndex(user => user.nickname === action.payload.nickname);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => { // PayloadAction의 타입을 string으로 변경
      state.users = state.users.filter(user => user.nickname !== action.payload); // 닉네임으로 필터링
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    saveUserList: (state, action: PayloadAction<UserModel[]>) => {
      //배열은 푸시.push 방식으로 바꾼다. -> JSON stringify
      // arra []
      state.users = action.payload; // 사용자 리스트 저장
    },
    saveUserDetail: (state, action: PayloadAction<UserModel | null>) => {
      state.currentUser = action.payload; // 현재 사용자 상세 정보 저장
    },
    saveUserRole: (state, action: PayloadAction<{ nickname: string; role: string }>) => {
      const index = state.users.findIndex(user => user.nickname === action.payload.nickname);
      if (index !== -1) {
        state.users[index].role = action.payload.role; // 사용자의 역할 업데이트
      }
    },
    logoutUser: (state, action: PayloadAction<string>) => {
      const index = state.users.findIndex(user => user.nickname === action.payload);
      if (index !== -1) {
        state.users[index].logoutAt = new Date().toISOString();
      }
    },
    saveSuccess: (state, action: PayloadAction<string | null>) => {
      state.successMessage = action.payload; // 성공 메시지 저장
    },
  }
});

export const getCurrentUser = (state: RootState) => state.user.currentUser;
export const getUsers = (state:  RootState) => state.user.users;
export const getIsLoading = (state: RootState) => state.user.isLoading;
export const getError = (state:  RootState) => state.user.error;

// 액션 생성자들을 export
export const {
  saveCurrentUser,
  saveUsers,
  addUser,
  updateUser,
  deleteUser,
  saveLoading,
  saveError,
  saveUserList,
  saveUserDetail,
  saveUserRole,
  logoutUser,
  saveSuccess,
} = userSlice.actions;

// 리듀서를 export
export default userSlice.reducer;