import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { isSameOrAfterNow, compareDates, getCurrentYear, getCurrentMonth, getWeekdayShortForm, getMonthShortForm } from '../../utils/dateUtils';
import _ from 'lodash';
import './reminder-card-component.scss';

const ReminderCard = ({ reminder }) => {
  const { events } = reminder;
  const upcommingDates = _.map(events, event => new Date(event.dateTime))
    .filter(isSameOrAfterNow)
    .sort(compareDates)
    .slice(0, 5);

  let currYear = getCurrentYear();
  let currMonth = getCurrentMonth();

  const upcommingDatesStr = upcommingDates.map(dateTime => {
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const date = dateTime.getDate();
    const str =
      `${currYear === year ? '' : year + ': '}${currMonth === month ? '' : getMonthShortForm(dateTime) + ': '}${date}(${getWeekdayShortForm(dateTime)})`;
    currYear = year;
    currMonth = month;
    return str;
  }).join(', ');

  return (
    <div className="reminder-card-component">
      <Card>
        <Card.Body>
          <Card.Title as="h6">{reminder.name}</Card.Title>
          <Card.Subtitle as="small">{upcommingDatesStr}</Card.Subtitle>
        </Card.Body>
      </Card>
      {/* <EventsList events={events} /> */}
    </div>
  );
};

ReminderCard.prototypes = {
  reminder: PropTypes.object.isRequired
};

export default ReminderCard;
