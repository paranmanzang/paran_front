// chatSlice.ts

import { ChatMessageModel, ChatRoomModel, ChatUserModel, initialChatState } from '@/app/model/chat/chat.model';
import { RootState } from '@/lib/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        saveRooms: (state, action: PayloadAction<ChatRoomModel[]>) => {
            state.rooms = action.payload;
        },
        saveCurrentRoom: (state, action: PayloadAction<ChatRoomModel | null>) => {
            state.currentRoom = action.payload;
        },
        saveUsers: (state, action: PayloadAction<ChatUserModel[]>) => {
            state.users = action.payload;
        },
        addRoom: (state, action: PayloadAction<ChatRoomModel>) => {
            state.rooms.push(action.payload);
        },
        addUser: (state, action: PayloadAction<ChatUserModel>) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.nickname !== action.payload);
        },
        updateRoomInState: (state, action: PayloadAction<ChatRoomModel>) => {
            const index = state.rooms.findIndex((room) => room.roomId === action.payload.roomId);
            if (index !== -1) {
              state.rooms[index] = action.payload;
            }
          },
        removeRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter((room) => room.roomId !== action.payload);
            if (state.currentRoom && state.currentRoom.roomId === action.payload) {
              state.currentRoom = null;
            }
            // 방과 관련된 사용자 및 메시지 삭제
            state.users = [];
          },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getRooms = (state: RootState) => state.chat.rooms;
export const getCurrentRoom = (state: RootState) => state.chat.currentRoom;
export const getUsers = (state: RootState) => state.chat.users;
export const getIsLoading = (state: RootState) => state.chat.isLoading;
export const getError = (state: RootState) => state.chat.error;


export const {
    saveRooms,
    addRoom,
    saveCurrentRoom,
    saveUsers,
    addUser,
    removeUser,
    saveLoading,
    saveError,
} = chatSlice.actions;

export default chatSlice.reducer;