import React, { useState, useEffect } from 'react';
import './calendar.css';
import {
  findMonth,
  nextMonth,
  previousMonth,
  getDaysInMonth,
} from '../helpers/dateHelpers';
import Day from './day/day';

export default function Calendar() {
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
    let today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
  }, []);
  useEffect(() => {
    setDays(getDaysInMonth(month, year));
  }, [month, year]);
  return (
    <div className='calendarcontainer'>
      <h2 className='year'>
        <button onClick={() => setYear(year - 1)}>-</button>
        {year.toString()}
        <button onClick={() => setYear(year + 1)}>+</button>
      </h2>
      <h2 className='month'>
        <button onClick={() => previousMonth(setYear, year, setMonth, month)}>
          -
        </button>
        {findMonth(month)}
        <button onClick={() => nextMonth(setYear, year, setMonth, month)}>
          +
        </button>
      </h2>
      <div className='calendar'>
        {daysArr.map((day) => (
          <Day key={day} day={day}></Day>
        ))}
      </div>
    </div>
  );
}
