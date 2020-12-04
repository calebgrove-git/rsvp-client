import React from 'react';
import './events.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { eventsMenu } from '../reducers/menus';

export default function Events() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.menus);
  function submit(e) {
    e.preventDefault();
    dispatch(eventsMenu());
  }
  function toggleModal() {
    dispatch(eventsMenu());
  }
  return (
    <Modal
      isOpen={modal.events}
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
          background: 'transparent',
          border: 'none',
          height: '50vh',
          width: '70vw',
          overflow: 'hidden',
        },
      }}
    >
      <div className='events' onSubmit={submit}>
        <h2>New Event</h2>
        <form className='eventsform'>
          <label htmlFor='date'>Date</label>
          <input type='date' name='date' id='date' />
          <label htmlFor='time'>Time</label>
          <input type='time' name='time' id='time' />
          <label htmlFor='date'>Event Name</label>
          <input type='text' name='name' id='name' />
          <label htmlFor='date'>Description</label>
          <textarea name='description' id='description' />
          <button type='submit'>Create</button>
        </form>
      </div>
    </Modal>
  );
}
