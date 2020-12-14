import React, { useState } from 'react';
import './events.css';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { eventsMenu } from '../reducers/menus';
import { createEvent } from '../api/createEvent';
import { addedEvent, events } from '../reducers/events';

export default function Events() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.events);
  const modal = useSelector((state) => state.menus);
  const user = useSelector((state) => state.auth.user);
  const [formInput, setFormInput] = useState({
    id: null,
    date: '',
    time: '',
    name: '',
    description: '',
    creator: user.id,
    creatoremail: user.email,
    invited: [],
    accepted: [],
    declined: [],
  });
  function input(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }
  function submit(e) {
    e.preventDefault();
    createEvent(formInput);
    dispatch(eventsMenu());
    dispatch(addedEvent());
    dispatch(
      events({
        createdEvents: [...allEvents.createdEvents, formInput],
        invitedEvents: [...allEvents.invitedEvents],
      })
    );
  }
  function toggleModal() {
    dispatch(eventsMenu());
  }
  return (
    <Modal
      ariaHideApp={false}
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
          <input type='date' name='date' id='date' onChange={input} required />
          <label htmlFor='time'>Time</label>
          <input type='time' name='time' id='time' onChange={input} required />
          <label htmlFor='name'>Event Name</label>
          <input type='text' name='name' id='name' onChange={input} required />
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' onChange={input} />
          <button type='submit'>Create</button>
        </form>
      </div>
    </Modal>
  );
}
