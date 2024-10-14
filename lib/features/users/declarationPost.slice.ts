import { initialUserState, DeclarationPostModel} from '@/app/model/user/users.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const declarationPostSlice = createSlice({
    name: 'declarationPost',
    initialState: initialUserState,
    reducers: {
        saveDeclarationPosts: (state, action: PayloadAction<DeclarationPostModel[]>) => {
            state.declarationPosts.push(...action.payload);
        },
        saveCurrentDeclarationPost: (state, action: PayloadAction<DeclarationPostModel>) => {
            state.currentDeclarationPost = action.payload;
        },
        addDeclarationPost: (state, action: PayloadAction<DeclarationPostModel>) => {
            state.declarationPosts.push(action.payload);
        },
        deleteDeclarationPost: (state, action: PayloadAction<number>) => {
            state.declarationPosts = state.declarationPosts.filter(declarationPost => declarationPost.id !== action.payload);
        },
    }
});

// 셀렉터 정의
export const getDeclarationPosts = (state: RootState) => state.declarationPost.declarationPosts;
export const getCurrnetDeclarationPost = (state: RootState) => state.declarationPost.currentDeclarationPost;

export const {
    saveDeclarationPosts,
    addDeclarationPost,
    deleteDeclarationPost,
} = declarationPostSlice.actions;

export default declarationPostSlice.reducer;