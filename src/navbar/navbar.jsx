import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mainMenu } from '../reducers/menus';
import Modal from 'react-modal';
import './navbar.css';
import Menu from './menu/menu';

export default function Navbar() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.menus);
  function toggleModal() {
    dispatch(mainMenu());
  }
  return (
    <div className='nav'>
      <h1>RSVP</h1>
      <button className='menu' onClick={toggleModal}>
        Menu
      </button>
      <Modal
        isOpen={modal.main}
        onRequestClose={toggleModal}
        className='menu'
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'transparent' },
          content: {
            height: '30vh',
            backgroundColor: '#333456',
            width: '50vw',
            zIndex: '5',
            padding: '0',
            margin: '0',
            right: '0',
            left: 'static',
            top: '0',
            position: 'absolute',
          },
        }}
      >
        <Menu></Menu>
      </Modal>
    </div>
  );
}
