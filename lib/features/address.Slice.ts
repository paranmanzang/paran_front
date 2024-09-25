// addressSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAddressState, AddressModel, AddressUpdateModel } from '../../app/model/address.model';
import { RootState } from "../store"

const addressSlice = createSlice({
    name: 'address',
    initialState: initialAddressState,
    reducers: {
        setAddresses: (state, action: PayloadAction<AddressModel[]>) => {
            state.addresses = action.payload;
        },
        addAddress: (state, action: PayloadAction<AddressModel>) => {
            state.addresses.push(action.payload);
        },
        updateAddress: (state, action: PayloadAction<AddressUpdateModel>) => {
            const index = state.addresses.findIndex(address => address.id === action.payload.id);
            if (index !== -1) {
                state.addresses[index] = { ...state.addresses[index], ...action.payload };
            }
        },
        deleteAddress: (state, action: PayloadAction<number>) => {
            state.addresses = state.addresses.filter(address => address.id !== action.payload);
        },
        setCurrentAddress: (state, action: PayloadAction<AddressModel | null>) => {
            state.currentAddress = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const getAddresses = (state: RootState) => state.address.addresses;
export const getCurrentAddress = (state: RootState) => state.address.currentAddress;
export const getIsLoading = (state: RootState) => state.address.isLoading;
export const getError = (state: RootState) => state.address.error;


export const {
    setAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setCurrentAddress,
    setLoading,
    setError,
} = addressSlice.actions;

export default addressSlice.reducer;