import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducers/auth';
import './login.css';
import { aboutMenu, createAccount } from '../reducers/menus';
import { loginFetch } from '../api/loginFetch';
import { refreshFetch } from '../api/refreshFetch';

export default function Login() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    async function handleRefresh() {
      if (localStorage.getItem('rsvp-token')) {
        const user = await refreshFetch(localStorage.getItem('rsvp-token'));
        dispatch(signIn(user));
      } else return;
    }
    handleRefresh();
  }, [dispatch]);
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  async function login(formInput) {
    const res = await loginFetch(formInput);
    if (res.error) {
      alert(res.error.message);
      return;
    }
    localStorage.setItem('rsvp-token', res.accessToken);
    dispatch(signIn(res.user));
  }
  function submit(e) {
    e.preventDefault();
    login(formInput);
  }
  return (
    <div className='loginpage'>
      <h1>RSVP</h1>
      <div className='login-background'>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formInput.email}
            onChange={input}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            id='password'
            value={formInput.password}
            onChange={input}
            required
          />
          <button type='submit'>Login</button>
        </form>
        <button onClick={() => dispatch(createAccount())}>
          Create Account
        </button>
        <button onClick={() => dispatch(aboutMenu())}>About</button>
      </div>
    </div>
  );
}
