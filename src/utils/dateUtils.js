import moment from 'moment';

export const isSameOrAfterNow = date =>
  moment(date).isSameOrAfter(moment.now());

export const compareDates = (a, b) =>
  a.getTime() - b.getTime();

export const isCurrentYear = date =>
  new Date().getFullYear() === date.getFullYear();

export const isCurrentMonth = date =>
  new Date().getMonth() === date.getMonth() && isCurrentYear(date);

export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentMonth = () => new Date().getMonth();

export const getWeekdayShortForm = date =>
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];

export const getMonthShortForm = date =>
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];