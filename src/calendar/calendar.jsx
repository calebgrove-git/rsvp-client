import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './calendar.css';
import {
  findMonth,
  nextMonth,
  previousMonth,
  getDaysInMonth,
} from '../helpers/dateHelpers';
import Day from './day/day';
import { eventsFetch } from '../api/eventsFetch';
import { events } from '../reducers/events';
import { contacts } from '../reducers/contacts';
import Events from '../events/events';
import Contacts from '../contacts/contacts';
import CreateContact from '../createContact/createContact';
import { contactsFetch } from '../api/contactsFetch';

export default function Calendar() {
  const dispatch = useDispatch();
  const allEvents = useSelector((state) => state.events);
  const menus = useSelector((state) => state.menus);
  const user = useSelector((state) => state.auth.user.id);
  const added = useSelector((state) => state.events.added);
  const contactAdded = useSelector((state) => state.contacts.added);
  const [days, setDays] = useState(31);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1);
  const [daysArr, setDaysArr] = useState([]);
  useEffect(() => {
    let array = [];
    for (let i = 0; i < days; i++) {
      array.push(i + 1);
    }
    setDaysArr(array);
  }, [days]);

  useEffect(() => {
    async function fetchEventsAndContacts() {
      const eventsObj = await eventsFetch(user);
      const contactsObj = await contactsFetch(user);
      dispatch(contacts(contactsObj));
      dispatch(events(eventsObj));
      return;
    }
    fetchEventsAndContacts();
    let today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
  }, [user, dispatch, added, contactAdded, menus.contacts, allEvents.added]);
  useEffect(() => {
    setDays(getDaysInMonth(month, year));
  }, [month, year]);
  return (
    <div className='calendarcontainer'>
      <h2 className='year'>
        <button className='calButton' onClick={() => setYear(year - 1)}>
          Previous Year
        </button>
        {year.toString()}
        <button className='calButton' onClick={() => setYear(year + 1)}>
          Next Year
        </button>
      </h2>
      <h2 className='month'>
        <button
          className='calButton'
          onClick={() => previousMonth(setYear, year, setMonth, month)}
        >
          Previous Month
        </button>
        {findMonth(month)}
        <button
          className='calButton'
          onClick={() => nextMonth(setYear, year, setMonth, month)}
        >
          Next Month
        </button>
      </h2>
      <div className='calendar'>
        {daysArr.map((day) => (
          <Day
            key={day}
            day={day}
            year={year}
            month={month}
            events={allEvents}
          ></Day>
        ))}
      </div>
      {menus.events ? <Events /> : null}
      {menus.contacts ? <Contacts /> : null}
      {menus.createContact ? <CreateContact /> : null}
    </div>
  );
}
