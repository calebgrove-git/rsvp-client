import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDay } from '../../../reducers/menus';
import Modal from 'react-modal';
import './fullday.css';
import IndividualEvent from './indivdualevent/individualEvent';
export default function FullDay(props) {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.menus);
  function toggleModal() {
    dispatch(selectDay());
  }
  return (
    <Modal
      style={{
        overlay: {
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
        },
        content: {
          margin: 'auto',
          padding: '0',
          height: '50vh',
          width: '70vw',
          background: 'transparent',
          border: 'none',
        },
      }}
      isOpen={modal.selectedDay === props.day}
      onRequestClose={toggleModal}
      ariaHideApp={false}
    >
      <div className='fullday'>
        <div className='fullday-top'>
          <h2>Events</h2>
          <button onClick={toggleModal}>Close</button>
        </div>
        <div className='eventbox'>
          {props.daysEvents.map((event) => {
            return (
              <IndividualEvent key={event.id} event={event}></IndividualEvent>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
