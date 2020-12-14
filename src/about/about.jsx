import React from 'react';
import { aboutMenu } from '../reducers/menus';
import { useDispatch } from 'react-redux';
import './about.css';

export default function About() {
  const dispatch = useDispatch();
  return (
    <div className='about'>
      <h1>About</h1>
      <br />
      <p>
        RSVP is a calendar application that lets you create calendar events, add
        contacts to your contacts list, and invite those contacts to events.
        You'll be able to see who has accepeted or declined your invitations.
        Note: For now only contacts that have an account can be added to your
        contacts list.
      </p>
      <br />
      <p>
        To add a contact: Navigate to the menu, select contacts, and click
        create contact. <br /> To create an event: Navigate to the menu and
        select new event. <br />
        To invite to an event: Click on the day of the event, click on the event
        you want to invite to, and click invite under the user you want to
        invite.
      </p>
      <br />
      <p>
        To try the application without creating an account you can use any of
        the following users <br />
        <br /> user1@user : user1 <br /> user2@user : user2 <br /> user3@user :
        user3 <br /> user4@user : user4 <br /> user5@user : user5 <br />
      </p>
      <br />
      <button onClick={() => dispatch(aboutMenu())}>Back</button>
    </div>
  );
}
