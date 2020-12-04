import React from 'react';
import './createContact.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { createContactMenu } from '../reducers/menus';

export default function CreateContact() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.menus);
  function submit(e) {
    e.preventDefault();
    dispatch(createContactMenu());
  }
  function toggleModal() {
    dispatch(createContactMenu());
  }
  return (
    <Modal
      isOpen={modal.createContact}
      onRequestClose={toggleModal}
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
          <input type='text' name='name' id='name' />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <button>Add Contact</button>
        </form>
      </div>
    </Modal>
  );
}
