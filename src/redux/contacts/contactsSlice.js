import { createSlice } from "@reduxjs/toolkit";
import {getContacts, addContacts, deleteContact} from './operations'

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [getContacts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    [getContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },

    [getContacts.error]: (state, action) => {
      state.error = true;
      state.loading = true;
    },

    [addContacts.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    [addContacts.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.contacts.push(action.payload)
    },

    [addContacts.error]: (state, action) => {
      state.error = true;
      state.loading = true;
    },

    [deleteContact.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },

    [deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      state.contacts.splice(index, 1)
    },

    [deleteContact.error]: (state, action) => {
      state.error = true;
      state.loading = true;
    },
  }
});

export const contactReducer = contactSlice.reducer;
