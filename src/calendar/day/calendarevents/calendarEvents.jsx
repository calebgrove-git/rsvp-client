import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './calendarevents.css';
export default function CalendarEvents(props) {
  const user = useSelector((state) => state.auth.user);
  const [className, setClassName] = useState('');

  useEffect(() => {
    function findRelation() {
      if (props.event.accepted.includes(user.id)) {
        return 'accepted';
      }
      if (props.event.invited.includes(user.id)) {
        return 'tentative';
      }
    }
    setClassName(findRelation());
  }, [props, user.id]);
  return (
    <div key={props.event.id} className={className}>
      {props.event.name}
    </div>
  );
}
