import React, { useState } from 'react';
import './createContact.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createContactMenu } from '../reducers/menus';
import { addedContact } from '../reducers/contacts';
import { createContact } from '../api/createContact';

export default function CreateContact() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.menus);
  const user = useSelector((state) => state.auth.user.id);
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    userid: user,
  });
  function submit(e) {
    e.preventDefault();
    addContact(formInput);
  }
  function toggleModal() {
    dispatch(createContactMenu());
  }
  async function addContact(formInput) {
    let res = await createContact(formInput);
    if (res === 'Error') {
      alert('Email not found');
      return;
    }
    dispatch(addedContact());
    dispatch(createContactMenu());
  }
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Modal
      isOpen={modal.createContact}
      onRequestClose={toggleModal}
      ariaHideApp={false}
      style={{
        overlay: {
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
        },
        content: {
          margin: 'auto',
          padding: '0',
          background: 'transparent',
          border: 'none',
          height: '50vh',
          width: '70vw',
        },
      }}
    >
      <div className='createcontact'>
        <h2>New Contact</h2>
        <form className='contactform' onSubmit={submit}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' onChange={input} required />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={input}
            required
          />
          <button>Add Contact</button>
        </form>
      </div>
    </Modal>
  );
}
