import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import './index.css';
import App from './App';

import authReducer from './reducers/auth';
import menuReducer from './reducers/menus';
import eventsReducer from './reducers/events';
import contactsReducer from './reducers/contacts';
const reducer = combineReducers({
  auth: authReducer,
  menus: menuReducer,
  events: eventsReducer,
  contacts: contactsReducer,
});

const store = configureStore({
  reducer,
});
ReactDOM.render(
  <Provider store={store}>
    <App className='app' />
  </Provider>,
  document.getElementById('root')
);
