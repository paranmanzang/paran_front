import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialRoomState, RoomModel } from '../../../app/model/room/room.model';
import { RootState } from '../../store';

export const roomSlice = createSlice({
    name: 'room',
    initialState: initialRoomState,
    reducers: {
        saveRooms: (state, action: PayloadAction<RoomModel[]>) => {
            state.rooms = action.payload;
        },
        saveAllRooms: (state, action: PayloadAction<RoomModel[]>) => {
            state.allRooms = action.payload;
        },
        saveLikedRooms: (state, action: PayloadAction<RoomModel[]>) => {
            state.roomsLiked = action.payload
        },
        saveSeperatedRooms: (state, action: PayloadAction<RoomModel[]>) => {
            state.enabledrooms = action.payload.filter(room => room.enabled);
            state.notEnabledrooms = action.payload.filter(room => !room.enabled);
        },
        saveCurrentRoom: (state, action: PayloadAction<RoomModel | null>) => {
            state.currentRoom = action.payload;
        },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        addRoom: (state, action: PayloadAction<RoomModel>) => {
            state.rooms.push(action.payload)
        },
        addLikedRoom: (state, action: PayloadAction<RoomModel>) => {
            state.roomsLiked.push(action.payload);
        },
        addEnabledRoom: (state, action: PayloadAction<RoomModel>) => {
            state.enabledrooms.push(action.payload);
        },
        updateRoom: (state, action: PayloadAction<RoomModel>) => {
            const index = state.rooms.findIndex(room => room.id === action.payload.id)
            if (index !== -1) {
                state.rooms[index] = action.payload;
            }
        },
        removeRoom: (state, action: PayloadAction<number>) => {
            state.rooms.filter(room => room.id !== action.payload)
        },
        removeNotEnabledRoom: (state, action: PayloadAction<number>) => {
            state.notEnabledrooms.filter(room => room.id !== action.payload)
        },
        removeLikedRoom: (state, action: PayloadAction<number>) => {
            state.roomsLiked.filter(room => room.id !== action.payload)
        }
    },
});

// Selector 함수들
export const getSeperatedRooms = createSelector(
    (state: RootState) => state.room.enabledrooms,
    (state: RootState) => state.room.notEnabledrooms,
    (enabledrooms, notEnabledrooms) => ({
        enabledrooms,
        notEnabledrooms
    })
)
export const getRooms = (state: RootState) => state.room.rooms;
export const getAllRooms = (state: RootState) => state.room.allRooms;
export const getLikedRooms = (state: RootState) => state.room.roomsLiked;
export const getCurrentRoom = (state: RootState) => state.room.currentRoom;
export const getIsLoading = (state: RootState) => state.room.isLoading;
export const getError = (state: RootState) => state.room.error;

// 액션 생성자들을 export
export const {
    saveRooms,
    saveAllRooms,
    saveLikedRooms,
    saveSeperatedRooms,
    saveCurrentRoom,
    saveLoading,
    saveError,
    addRoom,
    updateRoom,
    removeRoom,
    addLikedRoom,
    removeLikedRoom,
    addEnabledRoom,
    removeNotEnabledRoom,
} = roomSlice.actions;

// 리듀서를 export
export default roomSlice.reducer;