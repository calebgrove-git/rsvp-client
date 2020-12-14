import React from 'react';
import './individualevent.css';
import { useSelector, useDispatch } from 'react-redux';
import FullIndividualEvent from './fullindivudalevent/fullIndividualEvent';
import { selectEvent } from '../../../../reducers/menus';
export default function IndividualEvent(props) {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus);
  const user = useSelector((state) => state.auth.user.id);
  const time = props.event.time.slice(0, 5);
  function loadEvent() {
    if (menus.event === false) {
      dispatch(selectEvent(props.event.id));
    }
    return;
  }
  const accepted = props.event.accepted.includes(user);
  return (
    <div className='individualevent' onClick={loadEvent}>
      <h1>Name: {props.event.name}</h1>
      <h1>Time: {time}</h1>
      {props.event.creator !== user ? (
        <h1>Accepted : {accepted ? 'Yes' : 'No'}</h1>
      ) : null}
      {menus.event && menus.selectedEvent === props.event.id ? (
        <FullIndividualEvent event={props.event}></FullIndividualEvent>
      ) : null}
      <hr></hr>
    </div>
  );
}
