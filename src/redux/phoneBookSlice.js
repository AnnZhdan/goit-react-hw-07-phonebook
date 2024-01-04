import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const contactInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    delContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, delContact } = phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;
