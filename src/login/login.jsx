import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../reducers/auth';
import './login.css';

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  function submit(e) {
    e.preventDefault();

    dispatch(signIn());
  }
  return (
    <div className='loginpage'>
      <h1>RSVP</h1>
      <div className='login-background'>
        <form onSubmit={submit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formInput.email}
            onChange={input}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            id='password'
            value={formInput.password}
            onChange={input}
          />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
