import { initialUserState,FriendModel} from '@/app/model/user/users.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const freindSlice = createSlice({
    name: 'friend',
    initialState: initialUserState,
    reducers: {
        saveFriends: (state, action: PayloadAction<FriendModel[]>) => {
            state.friends.push(...action.payload)
        },
        addFriend: (state, action: PayloadAction<FriendModel>) => {
            state.friends.push(action.payload);
        },
        deleteFriend: (state, action: PayloadAction<number>) => {
            state.friends = state.friends.filter(friend => friend.id !== action.payload);
        },
    }
});

export const getFriends = (state: RootState) => state.friend.friends;

export const {
    addFriend,
    deleteFriend,
    saveFriends
} = freindSlice.actions;

export default freindSlice.reducer;