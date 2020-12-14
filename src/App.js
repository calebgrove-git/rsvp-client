import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogIn from './login/login';
import Calendar from './calendar/calendar';
import Navbar from './navbar/navbar';
import './app.css';
import CreateAccount from './login/create/createAccount';

function App() {
  const menus = useSelector((state) => state.menus);
  const { auth } = useSelector((state) => state);
  function page() {
    if (!menus.createAccount) {
      return <LogIn></LogIn>;
    }
    return <CreateAccount></CreateAccount>;
  }
  return (
    <BrowserRouter>
      {!auth.loggedIn ? (
        page()
      ) : (
        <>
          <Navbar />
          <Calendar />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
