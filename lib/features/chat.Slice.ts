// chatSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialChatState, ChatRoomModel, ChatUserModel, ChatMessageModel } from '../../app/model/chat.model';
import { RootState } from '../store'

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        saveRooms: (state, action: PayloadAction<ChatRoomModel[]>) => {
            state.rooms = action.payload;
        },
        addRoom: (state, action: PayloadAction<ChatRoomModel>) => {
            state.rooms.push(action.payload);
        },
        saveCurrentRoom: (state, action: PayloadAction<ChatRoomModel | null>) => {
            state.currentRoom = action.payload;
        },
        saveUsers: (state, action: PayloadAction<ChatUserModel[]>) => {
            state.users = action.payload;
        },
        addUser: (state, action: PayloadAction<ChatUserModel>) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.nickname !== action.payload);
        },
        saveMessages: (state, action: PayloadAction<ChatMessageModel[]>) => {
            state.messages = action.payload;
        },
        addMessage: (state, action: PayloadAction<ChatMessageModel>) => {
            state.messages.push(action.payload);
        },
        updateUnreadCount: (state, action: PayloadAction<{ roomId: string; count: number }>) => {
            const room = state.rooms.find(r => r.roomId === action.payload.roomId);
            if (room) {
                room.unReadMessageCount = action.payload.count;
            }
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
export const getMessages = (state: RootState) => state.chat.messages;
export const getIsLoading = (state: RootState) => state.chat.isLoading;
export const getError = (state: RootState) => state.chat.error;


export const {
    saveRooms,
    addRoom,
    saveCurrentRoom,
    saveUsers,
    addUser,
    removeUser,
    saveMessages,
    addMessage,
    updateUnreadCount,
    saveLoading,
    saveError,
} = chatSlice.actions;

export default chatSlice.reducer;