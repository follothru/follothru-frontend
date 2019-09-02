import React from 'react';
import { connect } from 'react-redux';
import { remindersSelector, remindersLoadingSelector } from '../../redux/reminders/selectors';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import ReminderCard from './ReminderCard';
import './reminders-list-component.scss';

const RemindersList = ({ reminders, isLoading }) => {
  if (isLoading) {
    return <Spinner />
  }

  const renderReminders = () => reminders.map((reminder, key) =>
    <li className="reminders-list-item" key={key}>
      <ReminderCard reminder={reminder} />
    </li>
  );

  return (
    reminders.length > 0 ?
      <ul className="reminders-list-component">
        {renderReminders()}
      </ul>
      :
      <p>No reminders has been created.</p>
  );
};

RemindersList.propTypes = {
  reminders: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  reminders: remindersSelector(state),
  isLoading: remindersLoadingSelector(state)
});

export default connect(mapStateToProps)(RemindersList);
