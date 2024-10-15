import { initialUserState,FriendModel} from '@/app/model/user/users.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const friendSlice = createSlice({
    name: 'friend',
    initialState: initialUserState,
    reducers: {
        saveFriends: (state, action: PayloadAction<FriendModel[]>) => {
            state.friends = [...state.friends, ...action.payload];
        },
        saveAlreadyFriends: (state, action: PayloadAction<FriendModel[]>) => {
            state.alreadyFriends = [...state.alreadyFriends, ...action.payload]
        },
        savePendingFriends: (state, action: PayloadAction<FriendModel[]>) => {
            state.pendingFriends = [...state.pendingFriends, ...action.payload]; 
        },  
        addFriend: (state, action: PayloadAction<FriendModel>) => {
            state.friends = [...state.friends, action.payload];
        },
        deleteFriend: (state, action: PayloadAction<number>) => {
            state.friends = state.friends.filter(friend => friend.id !== action.payload);
        },
    }
});

export const getFriends = (state: RootState) => state.friend.friends;
export const getAlreadyFriends = (state: RootState) => state.friend.alreadyFriends;
export const getPendingFriends = (state: RootState) => state.friend.pendingFriends;

export const {
    addFriend,
    deleteFriend,
    saveAlreadyFriends,
    savePendingFriends,
    saveFriends
} = friendSlice.actions;

export default friendSlice.reducer;