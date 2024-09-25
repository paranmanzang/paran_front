// groupSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GroupModel,
  BookResponseModel,
  initialGroupState,
  CategoryModel,
  LikeBookModel,
  GroupResponseModel,
  GroupPostResponseModel,
  PointResponseModel,
} from '../../app/model/group.model';

const groupSlice = createSlice({
  name: 'group',
  initialState: initialGroupState,
  reducers: {
    saveBooks: (state, action: PayloadAction<BookResponseModel[]>) => {
      state.books = action.payload;
    },
    saveCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    saveGroups: (state, action: PayloadAction<GroupResponseModel[]>) => {
      state.groups = action.payload;
    },
    saveGroupPosts: (state, action: PayloadAction<GroupPostResponseModel[]>) => {
      state.groupPosts = action.payload;
    },
    savePoints: (state, action: PayloadAction<PointResponseModel[]>) => {
      state.points = action.payload;
    },
    saveLikedBooks: (state, action: PayloadAction<LikeBookModel[]>) => {
      state.likedBooks = action.payload;
    },
    saveCurrentGroup: (state, action: PayloadAction<GroupResponseModel | null>) => {
      state.currentGroup = action.payload;
    },
    saveCurrentBook: (state, action: PayloadAction<BookResponseModel | null>) => {
      state.currentBook = action.payload;
    },
    addGroup: (state, action: PayloadAction<GroupResponseModel>) => {
      state.groups.push(action.payload);
    },
    addGroupPost: (state, action: PayloadAction<GroupPostResponseModel>) => {
      state.groupPosts.push(action.payload);
    },
    updateGroup: (state, action: PayloadAction<GroupResponseModel>) => {
      const index = state.groups.findIndex(group => group.id === action.payload.id);
      if (index !== -1) {
        state.groups[index] = action.payload;
      }
    },
    deleteGroup: (state, action: PayloadAction<number>) => {
      state.groups = state.groups.filter(group => group.id !== action.payload);
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const getBooks = (state: any) => state.books;
export const getCategories = (state: any) => state.categories;
export const getGroups = (state: any) => state.groups;
export const getGroupPosts = (state: any) => state.groupPosts;
export const getPoints = (state: any) => state.points;
export const getLikedBooks = (state: any) => state.likedBooks;
export const getCurrentGroup = (state: any) => state.currentGroup;
export const getCurrentBook = (state: any) => state.currentBook;
export const getIsLoading = (state: any) => state.isLoading;
export const getError = (state: any) => state.error;

export const {
  saveBooks,
  saveCategories,
  saveGroups,
  saveGroupPosts,
  savePoints,
  saveLikedBooks,
  saveCurrentGroup,
  saveCurrentBook,
  addGroup,
  addGroupPost,
  updateGroup,
  deleteGroup,
  saveLoading,
  saveError,
} = groupSlice.actions;

export default groupSlice.reducer;