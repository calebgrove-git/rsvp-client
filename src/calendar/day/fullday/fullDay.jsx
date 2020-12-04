import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDay } from '../../../reducers/menus';
import Modal from 'react-modal';
import './fullday.css';

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
      isOpen={modal.day}
      onRequestClose={toggleModal}
      ariaHideApp={false}
    >
      <div className='fullday'>
        <h2>Events</h2>
        <button onClick={toggleModal}>Close</button>
      </div>
    </Modal>
  );
}
