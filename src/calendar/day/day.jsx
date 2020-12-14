import React, { useState, useEffect } from 'react';
import { selectDay } from '../../reducers/menus';
import { useDispatch, useSelector } from 'react-redux';
import './day.css';
import FullDay from './fullday/fullDay';
import CalendarEvents from './calendarevents/calendarEvents';
export default function Day(props) {
  const menus = useSelector((state) => state.menus);
  const user = useSelector((state) => state.auth.user.id);
  const dispatch = useDispatch();
  const [date, setDate] = useState(null);
  const [daysEvents, setDaysEvents] = useState([]);
  function selectThisDay() {
    if (menus.day === false) {
      dispatch(selectDay(props.day));
    }
    return;
  }
  useEffect(() => {
    function handleDate() {
      if (props.day < 10) {
        return `${props.year}-${props.month}-0${props.day}`;
      }
      return `${props.year}-${props.month}-${props.day}`;
    }
    setDate(handleDate());
  }, [props.day, props.month, props.year]);
  useEffect(() => {
    const eventsArr = [];

    if (props.events.createdEvents) {
      props.events.createdEvents.forEach((event) => {
        if (event.date.includes(date)) {
          eventsArr.push(event);
        }
      });
    }
    if (props.events.createdEvents) {
      props.events.invitedEvents.forEach((event) => {
        if (event.date.includes(date) && !event.declined.includes(user)) {
          eventsArr.push(event);
        }
      });
    }

    setDaysEvents(eventsArr);
  }, [props.events, date]);
  return (
    <>
      <div className='day' onClick={selectThisDay}>
        {props.day}
        <br></br>
        {daysEvents.map((event) => {
          return <CalendarEvents key={event.id} event={event}></CalendarEvents>;
        })}
        {menus.day && menus.selectedDay === props.day ? (
          <FullDay daysEvents={daysEvents} day={props.day}></FullDay>
        ) : null}
      </div>
    </>
  );
}
