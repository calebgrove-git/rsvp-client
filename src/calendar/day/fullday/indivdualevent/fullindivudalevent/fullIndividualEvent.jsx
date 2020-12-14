import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import './fullindividualevent.css';
import {
  selectEvent,
  contactsMenu,
  inviteMenu,
} from '../../../../../reducers/menus';
import { changedEvent, addedEvent } from '../../../../../reducers/events';
import { emailsFetch } from '../../../../../api/emailsFetch';
import { acceptInvite } from '../../../../../api/acceptInvite.js';
import { declineInvite } from '../../../../../api/declineInvite';
export default function FullIndividualEvent(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.id);
  const [emails, setEmails] = useState([]);
  const [attending, setAttending] = useState([]);
  const [invitedEmails, setInvitedEmails] = useState([]);
  function close() {
    dispatch(selectEvent());
  }
  function findCreator() {
    if (user === props.event.creator) {
      return 'You';
    }
    return props.event.creatoremail;
  }
  function invite() {
    dispatch(changedEvent(props.event));
    dispatch(contactsMenu());
    dispatch(inviteMenu());
  }
  async function setAllEmails(requestArr, invitedArr) {
    let res = await emailsFetch(requestArr);
    let invitedRes = await emailsFetch(invitedArr);
    setEmails(res);
    setInvitedEmails(invitedRes);
  }
  useEffect(() => {
    const requestArr = [...props.event.declined, ...props.event.accepted];
    const invitedArr = [...props.event.invited];
    const stateArr = [
      props.event.declined,
      props.event.accepted,
      props.event.invited,
    ];
    setAttending(stateArr);
    setAllEmails(requestArr, invitedArr);
  }, [props.event.invited, props.event.declined, props.event.accepted]);
  function displayEmails() {
    let returnArr = [];
    let mutableAttending = attending;
    if (mutableAttending.length === 3 && emails.length >= 1) {
      mutableAttending[0].forEach((declined) => {
        emails.forEach((declinedEmail) => {
          declinedEmail.forEach((arr) => {
            if (declined === arr.id) {
              returnArr.push({
                ...arr,
                status: 'Declined',
                key: Math.random(),
              });
              mutableAttending[2] = mutableAttending[2].map((x) => {
                if (x === declined) {
                  return 0;
                }
                return x;
              });
            }
          });
        });
      });
    }
    if (mutableAttending.length === 3 && emails.length >= 1) {
      mutableAttending[1].forEach((accepted) => {
        emails.forEach((acceptedEmail) => {
          acceptedEmail.forEach((arr) => {
            if (accepted === arr.id) {
              returnArr.push({
                ...arr,
                status: 'Accepted',
                key: Math.random(),
              });
              mutableAttending[2] = mutableAttending[2].map((x) => {
                if (x === accepted) {
                  return 0;
                }
                return x;
              });
            }
          });
        });
      });
    }
    if (mutableAttending.length === 3 && invitedEmails.length >= 1) {
      mutableAttending[2].forEach((tentative) => {
        invitedEmails.forEach((tentativeEmail) => {
          tentativeEmail.forEach((arr) => {
            if (tentative === arr.id) {
              returnArr.push({
                ...arr,
                status: 'Tentative',
                key: Math.random(),
              });
            }
          });
        });
      });
    }
    return returnArr;
  }
  displayEmails();
  function handleAccept() {
    acceptInvite(user, props.event);
    dispatch(addedEvent());
  }
  function handleDecline() {
    declineInvite(user, props.event);
    dispatch(addedEvent());
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
      onRequestClose={close}
      isOpen={true}
      ariaHideApp={false}
    >
      <div className='fullindividualevent'>
        <div className='fullindividual-top'>
          <h2>{props.event.name}</h2>
          <div>
            {findCreator() === 'You' ? (
              <button onClick={invite}>Invite</button>
            ) : null}
            <button onClick={close}>Close</button>
          </div>
        </div>
        <div className='eventdetails'>
          <p>Time: {props.event.time}</p>
          <p>Created by: {findCreator()}</p>
          <div className='invited'>
            Invited:
            {displayEmails().map((email) => {
              return (
                <p key={email.key}>
                  {email.email} {email.status}
                </p>
              );
            })}
          </div>
          <div className='accept-decline'>
            {findCreator() !== 'You' && !props.event.accepted.includes(user) ? (
              <button onClick={handleAccept}>Accept</button>
            ) : null}
            {findCreator() !== 'You' && !props.event.declined.includes(user) ? (
              <button onClick={handleDecline}>Decline</button>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}
