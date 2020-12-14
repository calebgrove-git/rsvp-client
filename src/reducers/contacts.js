import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    added: false,
  },
  reducers: {
    contacts: (state, { payload }) => {
      state.contacts = payload;
    },
    addedContact: (state) => {
      state.added = !state.added;
    },
  },
});

export default slice.reducer;
export const { contacts, addedContact } = slice.actions;
