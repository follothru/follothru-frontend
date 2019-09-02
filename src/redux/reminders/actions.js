export const types = {
  GET_REMINDERS: 'reminders/GET_REMINDERS',
  GET_REMINDERS_SUCCESS: 'reminders/GET_REMINDERS_SUCCESS',
  GET_REMINDERS_FAILURE: 'reminders/GET_REMINDERS_FAILURE',

  CREATE_REMINDER: 'reminder/CREATE_REMINDER',
  CREATE_REMINDER_SUCCESS: 'reminder/CREATE_REMINDER_SUCCESS',
  CREATE_REMINDER_FAILURE: 'reminder/CREATE_REMINDER_FAILURE'
};

export const getReminders = courseId => ({
  type: types.GET_REMINDERS,
  courseId
});

export const getRemindersSuccess = reminders => ({
  type: types.GET_REMINDERS_SUCCESS,
  reminders
});

export const getRemindersFailure = error => ({
  type: types.GET_REMINDERS_FAILURE,
  error
});

export const createReminder = (name) => ({
  type: types.CREATE_REMINDER,
  name
});
