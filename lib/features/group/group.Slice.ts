// groupSlice.ts

import { GroupPostResponseModel, GroupResponseModel, initialGroupState, PointResponseModel } from '@/app/model/group/group.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';


const groupSlice = createSlice({
  name: 'group',
  initialState: initialGroupState,
  reducers: {
    saveGroups: (state, action: PayloadAction<GroupResponseModel[]>) => {
      state.groups = action.payload;
    },
    addGroup: (state, action: PayloadAction<GroupResponseModel>) => {
      state.groups.push(action.payload);
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
    saveCurrentGroup: (state, action: PayloadAction<GroupResponseModel | null>) => {
      state.currentGroup = action.payload;
    },
    saveGroupPosts: (state, action: PayloadAction<GroupPostResponseModel[]>) => {
      // categoryName에 따라 posts를 분리하여 저장
      const noticePosts = action.payload.filter(post => post.postCategory === '공지 사항');
      const generalPosts = action.payload.filter(post => post.postCategory !== '공지 사항');
  
      state.groupPostsNotice = [...noticePosts];  // notice 카테고리
      state.groupPostsGeneral = [...generalPosts]; // 나머지 카테고리
    },
    addGroupPost: (state, action: PayloadAction<GroupPostResponseModel>) => {
      // categoryName에 따라 적절한 배열에 추가
      if (action.payload.postCategory === '공지 사항') {
        state.groupPostsNotice = [...state.groupPostsNotice, action.payload];
      } else {
        state.groupPostsGeneral = [...state.groupPostsGeneral, action.payload];
      }
    },
    updateGroupPost: (state, action: PayloadAction<GroupPostResponseModel>) => {
      if (action.payload.postCategory === '공지 사항') {
        const index = state.groupPostsNotice.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.groupPostsNotice = [
            ...state.groupPostsNotice.slice(0, index),
            action.payload,
            ...state.groupPostsNotice.slice(index + 1),
          ];
        }
      } else {
        const index = state.groupPostsGeneral.findIndex(post => post.id === action.payload.id);
        if (index !== -1) {
          state.groupPostsGeneral = [
            ...state.groupPostsGeneral.slice(0, index),
            action.payload,
            ...state.groupPostsGeneral.slice(index + 1),
          ];
        }
      }
    },
    deleteGroupPost: (state, action: PayloadAction<{ id: number; categoryName: string }>) => {
      const { id, categoryName } = action.payload;
  
      if (categoryName === '공지 사항') {
        state.groupPostsNotice = state.groupPostsNotice.filter(post => post.id !== id);
      } else {
        state.groupPostsGeneral = state.groupPostsGeneral.filter(post => post.id !== id);
      }
    },
    saveCurrentGroupPost: (state, action: PayloadAction<GroupPostResponseModel | null>) => {
      state.currentGroupPost = action.payload;
    },
    savePoints: (state, action: PayloadAction<PointResponseModel[]>) => {
      state.points = action.payload;
    },
    addPoint: (state, action: PayloadAction<PointResponseModel>) => {
      state.points.push(action.payload);
    },
    updatePoint: (state, action: PayloadAction<PointResponseModel>) => {
      const index = state.points.findIndex(point => point.id === action.payload.id);
      if (index !== -1) {
        state.points[index] = action.payload;
      }
    },
    deletePoint: (state, action: PayloadAction<number>) => {
      state.points = state.points.filter(point => point.id !== action.payload);
    },
    saveLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const getGroups = (state: RootState) => state.group.groups;
export const getGroupPostsNotice = (state: RootState) => state.group.groupPostsNotice;
export const getGroupPostsGeneral = (state: RootState) => state.group.groupPostsGeneral;
export const getPoints = (state: RootState) => state.group.points;
export const getCurrentGroup = (state: RootState) => state.group.currentGroup;
export const getCurrentGroupPost = (state: RootState) => state.group.currentGroupPost;
export const getIsLoading = (state: RootState) => state.group.isLoading;
export const getError = (state: RootState) => state.group.error

export const {
  saveGroups,
  addGroup,
  updateGroup,
  deleteGroup,
  saveGroupPosts,
  addGroupPost,
  updateGroupPost,
  deleteGroupPost,
  savePoints,
  addPoint,
  updatePoint,
  deletePoint,
  saveCurrentGroup,
  saveCurrentGroupPost,
  saveLoading,
  saveError,
} = groupSlice.actions;

export default groupSlice.reducer;