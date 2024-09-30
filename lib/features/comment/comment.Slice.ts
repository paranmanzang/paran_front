// commentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CommentResponseModel, initialCommentState } from '@/app/model/comment/comment.model';
  

const commentSlice = createSlice({
    name: 'comment',
    initialState: initialCommentState,
    reducers: {
        // saveComments: (state, action: PayloadAction<CommentResponseModel[]>) => {
        //     state.comments = action.payload;
        // },
        // addComment: (state, action: PayloadAction<CommentResponseModel>) => {
        //     state.comments.push(action.payload);
        // },
        // updateComment: (state, action: PayloadAction<CommentResponseModel>) => {
        //     const index = state.comments.findIndex(comment => comment.id === action.payload.id);
        //     if (index !== -1) {
        //         state.comments[index] = action.payload;
        //     }
        // },
        // saveCurrentComment: (state, action: PayloadAction<CommentResponseModel | null>) => {
        //     state.currentComment = action.payload;
        // },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

// export const getComments = (state: RootState) => state.comment.comments
// export const getCurrentComments = (state: RootState) => state.comment.currentComment
export const getSaveLoading = (state: RootState) => state.comment.isLoading
export const getSaveError = (state: RootState) => state.comment.isLoading


export const {
    // saveComments,
    // addComment,
    // updateComment,
    // saveCurrentComment,
    saveLoading,
    saveError,
} = commentSlice.actions;

export default commentSlice.reducer;