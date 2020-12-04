import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import './index.css';
import App from './App';

import authReducer from './reducers/auth';
import menuReducer from './reducers/menus';

const reducer = combineReducers({
  auth: authReducer,
  menus: menuReducer,
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
