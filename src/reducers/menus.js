import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'menus',
  initialState: {
    main: false,
    contacts: false,
    events: false,
    createContact: false,
    day: false,
    selectedDay: null,
    createAccount: false,
    event: false,
    selectedEvent: null,
    invite: false,
  },
  reducers: {
    mainMenu: (state) => {
      state.main = !state.main;
    },
    contactsMenu: (state) => {
      state.contacts = !state.contacts;
    },
    eventsMenu: (state) => {
      state.events = !state.events;
    },
    createContactMenu: (state) => {
      state.createContact = !state.createContact;
    },
    selectDay: (state, { payload }) => {
      state.day = !state.day;
      state.selectedDay = payload;
    },
    createAccount: (state) => {
      state.createAccount = !state.createAccount;
    },
    selectEvent: (state, { payload }) => {
      state.event = !state.event;
      state.selectedEvent = payload;
    },
    inviteMenu: (state) => {
      state.invite = !state.invite;
    },
  },
});

export default slice.reducer;
export const {
  mainMenu,
  contactsMenu,
  eventsMenu,
  createContactMenu,
  selectDay,
  createAccount,
  selectEvent,
  inviteMenu,
} = slice.actions;
