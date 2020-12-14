import React from 'react';
import './contacts.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { contactsMenu, createContactMenu, inviteMenu } from '../reducers/menus';
import IndividualContact from './individualcontact/individualContact';
export default function Contacts() {
  const modal = useSelector((state) => state.menus);
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  function toggleModal() {
    dispatch(contactsMenu());
    if (modal.invite === true) {
      dispatch(inviteMenu());
    }
  }
  function newContact() {
    dispatch(contactsMenu());
    dispatch(createContactMenu());
  }

  return (
    <Modal
      isOpen={modal.contacts}
      onRequestClose={toggleModal}
      ariaHideApp={false}
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
        <div className='contacts-top'>
          <h2>Contacts</h2>
          {!modal.invite ? (
            <button onClick={newContact}>Create Contact</button>
          ) : null}
        </div>
        <div className='contactslist'>
          {contacts.contacts.map((contact) => {
            return (
              <div key={contact.id} className='individual-contact'>
                <IndividualContact contact={contact}></IndividualContact>
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
