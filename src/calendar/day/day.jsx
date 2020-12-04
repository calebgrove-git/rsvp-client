import React from 'react';
import { selectDay } from '../../reducers/menus';
import { useDispatch } from 'react-redux';
import './day.css';
import FullDay from './fullday/fullDay';

export default function Day(props) {
  const dispatch = useDispatch();
  function selectThisDay() {
    dispatch(selectDay(props.day));
  }
  return (
    <>
      <div className='day' onClick={selectThisDay}>
        {props.day}
      </div>
      <FullDay></FullDay>
    </>
  );
}
