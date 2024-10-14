import { initialUserState, AdminPostModel} from '@/app/model/user/users.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const adminPostSlice = createSlice({
    name: 'adminPost',
    initialState: initialUserState,
    reducers: {
        saveAdminPosts: (state, action: PayloadAction<AdminPostModel[]>) => {
            state.adminPosts.push(...action.payload);
        },
        saveCurrnetAdminPost: (state, action: PayloadAction<AdminPostModel>) => {
            state.currnetAdminpost = action.payload;
        },
        addAdminPost: (state, action: PayloadAction<AdminPostModel>) => {
            state.adminPosts.push(action.payload);
        },
        updateAdminPost: (state, action: PayloadAction<AdminPostModel>) => {
            const index = state.adminPosts.findIndex(adminPost => adminPost.id === action.payload.id);
            if (index !== -1) {
                state.adminPosts[index] = action.payload;
            }
        },
        deleteAdminPost: (state, action: PayloadAction<number>) => {
            state.adminPosts = state.adminPosts.filter((adminPost: AdminPostModel) => adminPost.id !== action.payload);
        },
    }
});

// 셀렉터 정의


export const getAdminPosts = (state: RootState) => state.adminPost.adminPosts;
export const getCurrnetAdminPost = (state: RootState) => state.adminPost.currnetAdminpost;

export const {
    addAdminPost,
    updateAdminPost,
    deleteAdminPost,
    saveAdminPosts,
} = adminPostSlice.actions;

export default adminPostSlice.reducer;