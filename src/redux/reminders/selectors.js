import { createSelector } from 'reselect';

export const remindersDomainSelector = state => state.reminders;

export const remindersLoadingSelector = createSelector(
  remindersDomainSelector,
  substate => substate.loading
);

export const remindersSelector = createSelector(
  remindersDomainSelector,
  substate => substate.reminders
);
