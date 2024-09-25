// reviewSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewModel, ReviewUpdateModel, initialReviewState } from '../../app/model/review.model';

// createSlice를 사용하여 slice 생성
const reviewSlice = createSlice({
    name: 'review',
    initialState: initialReviewState,
    reducers: {
        saveReviews: (state, action: PayloadAction<ReviewModel[]>) => {
            state.reviews = action.payload;
        },
        addReview: (state, action: PayloadAction<ReviewModel>) => {
            state.reviews.push(action.payload);
        },
        updateReview: (state, action: PayloadAction<ReviewUpdateModel>) => {
            const index = state.reviews.findIndex(review => review.id === action.payload.id);
            if (index !== -1) {
                state.reviews[index] = { ...state.reviews[index], ...action.payload };
            }
        },
        deleteReview: (state, action: PayloadAction<number>) => {
            state.reviews = state.reviews.filter(review => review.id !== action.payload);
        },
        saveCurrentReview: (state, action: PayloadAction<ReviewModel | null>) => {
            state.currentReview = action.payload;
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
export const getReviews = (state: any) => state.reviews;
export const getCurrentReview = (state: any) => state.currentReview;
export const getIsLoading = (state: any) => state.isLoading;
export const getError = (state: any) => state.error;


// 액션 생성자들을 export
export const {
    saveReviews,
    addReview,
    updateReview,
    deleteReview,
    saveCurrentReview,
    saveLoading,
    saveError,
} = reviewSlice.actions;

// 리듀서를 export
export default reviewSlice.reducer;