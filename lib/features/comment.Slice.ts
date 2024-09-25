// commentSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialCommentState, CommentResponseModel, CommentRequestModel } from '../../app/model/comment.model';

const commentSlice = createSlice({
    name: 'comment',
    initialState: initialCommentState,
    reducers: {
        saveComments: (state, action: PayloadAction<CommentResponseModel[]>) => {
            state.comments = action.payload;
        },
        addComment: (state, action: PayloadAction<CommentResponseModel>) => {
            state.comments.push(action.payload);
        },
        updateComment: (state, action: PayloadAction<CommentResponseModel>) => {
            const index = state.comments.findIndex(comment => comment.id === action.payload.id);
            if (index !== -1) {
                state.comments[index] = action.payload;
            }
        },
        deleteComment: (state, action: PayloadAction<number>) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload);
        },
        saveCurrentComment: (state, action: PayloadAction<CommentResponseModel | null>) => {
            state.currentComment = action.payload;
        },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getSaveComments = (state: any) => state.comments
export const getUpdateComment = (state: any) => state.comments
export const getDeleteComment = (state: any) => state.comments
export const getSaveCurrentComments = (state: any) => state.currentComment
export const getSaveLoading = (state: any) => state.isLoading
export const getSaveError = (state: any) => state.error


export const {
    saveComments,
    addComment,
    updateComment,
    deleteComment,
    saveCurrentComment,
    saveLoading,
    saveError,
} = commentSlice.actions;

export default commentSlice.reducer;