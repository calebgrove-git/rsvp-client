import React from 'react';
import './menu.css';
import { useDispatch } from 'react-redux';
import { contactsMenu, eventsMenu, mainMenu } from '../../reducers/menus';
import { signOut } from '../../reducers/auth';

export default function Menu(props) {
  const dispatch = useDispatch();
  function events() {
    dispatch(mainMenu());
    dispatch(eventsMenu());
  }
  function contacts() {
    dispatch(mainMenu());
    dispatch(contactsMenu());
  }
  function logout() {
    dispatch(mainMenu());
    dispatch(signOut());
  }
  return (
    <div className='menu'>
      <h2 onClick={events}>New Event</h2>
      <h2 onClick={contacts}>Contacts</h2>
      <h2 onClick={logout}>Logout</h2>
    </div>
  );
}
