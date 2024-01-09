import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { delContactThunk, getContactsThunk, postContactThunk } from 'api/api';

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [getContactsThunk, postContactThunk, delContactThunk];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
        state.error = null;
      })
      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
        state.error = null;
      })
      .addCase(delContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});
