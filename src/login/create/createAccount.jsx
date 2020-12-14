import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../reducers/menus';
import { createNewAccount } from '../../api/createNewAccount.js';

export default function CreateAccount() {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
    repeatpassword: '',
  });
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  function submit(e) {
    if (validate() === 'Passwords did not match') {
      e.preventDefault();
      alert(validate());
      return;
    }
    e.preventDefault();
    if (createNewAccount(formInput) === 'Error') {
      alert('Error');
    }
    alert('Account Created');
    dispatch(createAccount());
  }
  function validate(e) {
    let password = formInput.password;
    let repeatpassword = formInput.repeatpassword;
    if (password !== repeatpassword) {
      return 'Passwords did not match';
    }
  }
  return (
    <div className='loginpage'>
      <h1>RSVP</h1>
      <div className='login-background'>
        <h1>Create Account</h1>
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
          <label htmlFor='repeatpassword'>Repeat Password</label>
          <input
            name='repeatpassword'
            id='repeatpassword'
            value={formInput.repeatpassword}
            onChange={input}
            required
          />
          <button type='submit'>Create</button>
        </form>
        <button onClick={() => dispatch(createAccount())}>Cancel</button>
      </div>
    </div>
  );
}
