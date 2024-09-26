// chatSlice.ts

import { ChatRoomModel, ChatUserModel, initialChatState, LastReadMesaageTimeModel } from '@/app/model/chat/chat.model';
import { RootState } from '@/lib/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: initialChatState,
    reducers: {
        saveChatRooms: (state, action: PayloadAction<ChatRoomModel[]>) => {
            state.rooms = action.payload;
        },
        saveCurrentChatRoom: (state, action: PayloadAction<ChatRoomModel | null>) => {
            state.currentRoom = action.payload;
        },
        saveChatUsers: (state, action: PayloadAction<ChatUserModel[]>) => {
            state.users = action.payload;
        },
        saveLastReadMesaageTimes: (state, action: PayloadAction<LastReadMesaageTimeModel[]>) => {
            state.lastReadMesaageTimes = action.payload;
        },
        addLastReadMessageTimes: (state, action: PayloadAction<LastReadMesaageTimeModel>) => {
            state.lastReadMesaageTimes.push(action.payload);
        },
        addChatRoom: (state, action: PayloadAction<ChatRoomModel>) => {
            state.rooms.push(action.payload);
        },
        addChatUser: (state, action: PayloadAction<ChatUserModel>) => {
            state.users.push(action.payload);
        },
        removeChatUser: (state, action: PayloadAction<string>) => {
            state.users = state.users.filter(user => user.nickname !== action.payload);
        },
        updateRoomInState: (state, action: PayloadAction<ChatRoomModel>) => {
            const index = state.rooms.findIndex((room) => room.roomId === action.payload.roomId);
            if (index !== -1) {
              state.rooms[index] = action.payload;
            }
          },
        removeChatRoom: (state, action: PayloadAction<string>) => {
            state.rooms = state.rooms.filter((room) => room.roomId !== action.payload);
            if (state.currentRoom && state.currentRoom.roomId === action.payload) {
              state.currentRoom = null;
            }
            // 방과 관련된 사용자 및 메시지 삭제
            state.users = [];
            state.lastReadMesaageTimes = []
          },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getChatRooms = (state: RootState) => state.chat.rooms;
export const getCurrentChatRoom = (state: RootState) => state.chat.currentRoom;
export const getChatUsers = (state: RootState) => state.chat.users;
export const getIsLoading = (state: RootState) => state.chat.isLoading;
export const getError = (state: RootState) => state.chat.error;
export const getLastReadMesaageTimes = (state: RootState) => state.chat.lastReadMesaageTimes;


export const {
    saveChatRooms,
    addChatRoom,
    saveLastReadMesaageTimes,
    updateRoomInState,
    saveCurrentChatRoom,
    addLastReadMessageTimes,
    saveChatUsers,
    addChatUser,
    removeChatUser,
    removeChatRoom,
    saveLoading,
    saveError,
} = chatSlice.actions;

export default chatSlice.reducer;