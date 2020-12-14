import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'events',
  initialState: {
    createdEvents: [],
    invitedEvents: [],
    added: false,
    changingEvent: null,
  },
  reducers: {
    events: (state, { payload }) => {
      state.createdEvents = payload.createdEvents;
      state.invitedEvents = payload.invitedEvents;
    },
    addedEvent: (state) => {
      state.added = !state.added;
    },
    changedEvent: (state, { payload }) => {
      state.changingEvent = payload;
    },
  },
});

export default slice.reducer;
export const { events, addedEvent, changedEvent } = slice.actions;
