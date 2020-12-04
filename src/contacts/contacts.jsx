import React from 'react';
import './contacts.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { contactsMenu, createContactMenu } from '../reducers/menus';
export default function Contacts() {
  const modal = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  function toggleModal() {
    dispatch(contactsMenu());
  }
  function newContact() {
    dispatch(contactsMenu());
    dispatch(createContactMenu());
  }
  return (
    <Modal
      isOpen={modal.contacts}
      onRequestClose={toggleModal}
      style={{
        overlay: {
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
        },
        content: {
          padding: '0',
          margin: 'auto',
          height: '50vh',
          width: '70vw',
          background: 'transparent',
          border: 'none',
        },
      }}
    >
      <div className='contacts'>
        <h2>Contacts</h2>
        <button onClick={newContact}>Create Contact</button>
      </div>
    </Modal>
  );
}
