function findMonth(month) {
  if (month === 1) {
    return 'January';
  }
  if (month === 2) {
    return 'Feburary';
  }
  if (month === 3) {
    return 'March';
  }
  if (month === 4) {
    return 'April';
  }
  if (month === 5) {
    return 'May';
  }
  if (month === 6) {
    return 'June';
  }
  if (month === 7) {
    return 'July';
  }
  if (month === 8) {
    return 'August';
  }
  if (month === 9) {
    return 'September';
  }
  if (month === 10) {
    return 'October';
  }
  if (month === 11) {
    return 'November';
  }
  if (month === 12) {
    return 'December';
  }
}
function previousMonth(setYear, year, setMonth, month) {
  if (month === 1) {
    setYear(year - 1);
    setMonth(12);
    return;
  } else {
    setMonth(month - 1);
  }
}
function nextMonth(setYear, year, setMonth, month) {
  if (month === 12) {
    setYear(year + 1);
    setMonth(1);
    return;
  } else {
    setMonth(month + 1);
  }
}
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
module.exports = { findMonth, previousMonth, nextMonth, getDaysInMonth };
