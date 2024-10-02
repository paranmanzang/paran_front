// addressSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAddressState, AddressModel, AddressUpdateModel } from '../../../app/model/room/address.model';

const addressSlice = createSlice({
    name: 'address',
    initialState: initialAddressState,
    reducers: {
        saveAddresses: (state, action: PayloadAction<AddressModel[]>) => {
            state.addresses = action.payload;
        },
        addAddress: (state, action: PayloadAction<AddressModel>) => {
            state.addresses.push(action.payload);
        },
        updateAddress: (state, action: PayloadAction<AddressModel>) => {
            const index = state.addresses.findIndex(address => address.id === action.payload.id);
            if (index !== -1) {
                state.addresses[index] = action.payload;
            }
        },
        deleteAddress: (state, action: PayloadAction<number>) => {
            state.addresses = state.addresses.filter(address => address.id !== action.payload);
        },
        saveCurrentAddress: (state, action: PayloadAction<AddressModel | null>) => {
            state.currentAddress = action.payload;
        },
        saveLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        saveError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getAddresses = (state: any) => state.addresses;
export const getCurrentAddress = (state: any) => state.currentAddress;
export const getIsLoading = (state: any) => state.isLoading;
export const getError = (state: any) => state.error;


export const {
    saveAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    saveCurrentAddress,
    saveLoading,
    saveError,
} = addressSlice.actions;

export default addressSlice.reducer;