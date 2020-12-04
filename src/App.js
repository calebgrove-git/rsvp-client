import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogIn from './login/login';
import Calendar from './calendar/calendar';
import Navbar from './navbar/navbar';
import './app.css';
import Events from './events/events';
import Contacts from './contacts/contacts';
import CreateContact from './createContact/createContact';

function App() {
  const menus = useSelector((state) => state.menus);
  const { auth } = useSelector((state) => state);
  return (
    <BrowserRouter>
      {!auth.loggedIn ? (
        <LogIn></LogIn>
      ) : (
        <>
          <Navbar />
          <Calendar />
        </>
      )}
      {menus.events ? <Events /> : null}
      {menus.contacts ? <Contacts /> : null}
      {menus.createContact ? <CreateContact /> : null}
    </BrowserRouter>
  );
}

export default App;
