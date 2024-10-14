import { initialUserState, LikeRoomModel} from '@/app/model/user/users.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const likeRoomSlice = createSlice({
    name: 'likeRoom',
    initialState: initialUserState,
    reducers: {
        saveLikedRooms: (state, action: PayloadAction<LikeRoomModel[]>) => {
            state.likeRooms.push(...action.payload);
        },
        addLikedRoom: (state, action: PayloadAction<LikeRoomModel>) => {
            state.likeRooms.push(action.payload);
        },
        deleteLikedRoom: (state, action: PayloadAction<number>) => {
            state.likeRooms = state.likeRooms.filter(likeRoom => likeRoom.id !== action.payload);
        }
    }
});

// 셀렉터 정의
export const getLikedRooms = (state: RootState) => state.likeRoom.likeRooms;

export const {
    addLikedRoom,
    saveLikedRooms,
    deleteLikedRoom
} = likeRoomSlice.actions;

export default likeRoomSlice.reducer;