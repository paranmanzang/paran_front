// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';
// import { CategoryModel, initialCategoryState } from '@/app/model/group/category.model';


// // Slice 생성
// export const categorySlice = createSlice({
//   name: 'category',
//   initialState: initialCategoryState,
//   reducers: {
//     saveCategories: (state, action: PayloadAction<CategoryModel[]>) => {
//       state.categories = action.payload;
//     },
//     saveLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//     },
//     saveError: (state, action: PayloadAction<string | null>) => {
//       state.error = action.payload;
//     }
//   }
// });

// // Selector 함수들
// export const getCategories = () =>categories;
// export const getIsLoading = () => isLoading;
// export const getError = () => error;

// export const {
//   saveCategories,
//   saveLoading,
//   saveError
// } = categorySlice.actions;

// export default categorySlice.reducer;
