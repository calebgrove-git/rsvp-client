import React, { useEffect } from 'react';
import './individualcontact.css';
import { useSelector, useDispatch } from 'react-redux';
import { changedEvent } from '../../reducers/events';
import { inviteContact } from '../../api/inviteContact';
export default function IndividualContact(props) {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.menus);
  const currentEvent = useSelector((state) => state.events.changingEvent);
  function invite() {
    dispatch(
      changedEvent({
        ...currentEvent,
        invited: [...currentEvent.invited, props.contact.contactuserid],
      })
    );
  }
  useEffect(() => {
    if (currentEvent !== null) {
      inviteContact(currentEvent);
    }
  }, [currentEvent]);
  return (
    <div className='individualevent'>
      <h1>Name: {props.contact.name}</h1>
      <br />
      <h1>Email: {props.contact.email}</h1>
      {menus.invite &&
      !currentEvent.invited.includes(props.contact.contactuserid) ? (
        <button className='invite' onClick={invite}>
          Invite
        </button>
      ) : null}
      <hr></hr>
    </div>
  );
}
