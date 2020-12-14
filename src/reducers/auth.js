import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    loggedIn: false,
  },
  reducers: {
    signIn: (state, { payload }) => {
      state.user = payload;
      state.loggedIn = true;
    },
    signOut: (state) => {
      state.user = {};
      state.loggedIn = false;
    },
  },
});

export default slice.reducer;
export const { signIn, signOut } = slice.actions;
