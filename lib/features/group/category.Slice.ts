import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CategoryModel, initialCategoryState } from '@/app/model/group/category.model';


// Slice 생성
export const categorySlice = createSlice({
  name: 'category',
  initialState: initialCategoryState,
  reducers: {
    saveCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

// Selector 함수들
export const getCategories = (state: RootState) => state.category.categories;
export const getIsLoading = (state: RootState) => state.category.isLoading;
export const getError = (state: RootState) => state.category.error;

export const {
  saveCategories,
  saveLoading,
  saveError
} = categorySlice.actions;

export default categorySlice.reducer;
