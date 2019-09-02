import React from 'react';
import PropTypes from 'prop-types';
import { compareDates, isCurrentYear, getMonthShortForm } from '../../utils/dateUtils';
import _ from 'lodash';

const EventsList = ({ events }) => {
  const displayObject = {};

  const notifications = _.flatMap(events, event => event.notifications)
    .sort((a, b) => compareDates(new Date(a.dateTime), new Date(b.dateTime)));

  notifications.forEach(notification => {
    const dateTime = new Date(notification.dateTime);
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    const path = `${year}.${month}.${date}`;

  });
  console.log(displayObject);

  const renderEvents = () => events.map((event, key) => (
    <li key={key}>{event.dateTime}</li>
  ));

  return (
    <ul>
      {renderEvents()}
    </ul>
  )
};

EventsList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventsList;
