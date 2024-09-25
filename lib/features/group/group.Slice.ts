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
      state.groupPosts = action.payload;
    },
    addGroupPost: (state, action: PayloadAction<GroupPostResponseModel>) => {
      state.groupPosts.push(action.payload);
    },
    updateGroupPost: (state, action: PayloadAction<GroupPostResponseModel>) => {
      const index = state.groupPosts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.groupPosts[index] = action.payload;
      }
    },
    deleteGroupPost: (state, action: PayloadAction<number>) => {
      state.groupPosts = state.groupPosts.filter(post => post.id !== action.payload);
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
export const getGroupPosts = (state: RootState) => state.group.groupPosts;
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