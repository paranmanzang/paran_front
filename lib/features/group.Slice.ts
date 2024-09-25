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
import { RootState } from '../store';

const groupSlice = createSlice({
  name: 'group',
  initialState: initialGroupState,
  reducers: {
    setBooks: (state, action: PayloadAction<BookResponseModel[]>) => {
      state.books = action.payload;
    },
    setCategories: (state, action: PayloadAction<CategoryModel[]>) => {
      state.categories = action.payload;
    },
    setGroups: (state, action: PayloadAction<GroupResponseModel[]>) => {
      state.groups = action.payload;
    },
    setGroupPosts: (state, action: PayloadAction<GroupPostResponseModel[]>) => {
      state.groupPosts = action.payload;
    },
    setPoints: (state, action: PayloadAction<PointResponseModel[]>) => {
      state.points = action.payload;
    },
    setLikedBooks: (state, action: PayloadAction<LikeBookModel[]>) => {
      state.likedBooks = action.payload;
    },
    setCurrentGroup: (state, action: PayloadAction<GroupResponseModel | null>) => {
      state.currentGroup = action.payload;
    },
    setCurrentBook: (state, action: PayloadAction<BookResponseModel | null>) => {
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
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const getBooks = (state: RootState) => state.group.books;
export const getCategories = (state: RootState) => state.group.categories;
export const getGroups = (state: RootState) => state.group.groups;
export const getGroupPosts = (state: RootState) => state.group.groupPosts;
export const getPoints = (state: RootState) => state.group.points;
export const getLikedBooks = (state: RootState) => state.group.likedBooks;
export const getCurrentGroup = (state: RootState) => state.group.currentGroup;
export const getCurrentBook = (state: RootState) => state.group.currentBook;
export const getIsLoading = (state: RootState) => state.group.isLoading;
export const getError = (state: RootState) => state.group.error;

export const {
  setBooks,
  setCategories,
  setGroups,
  setGroupPosts,
  setPoints,
  setLikedBooks,
  setCurrentGroup,
  setCurrentBook,
  addGroup,
  addGroupPost,
  updateGroup,
  deleteGroup,
  setLoading,
  setError,
} = groupSlice.actions;

export default groupSlice.reducer;