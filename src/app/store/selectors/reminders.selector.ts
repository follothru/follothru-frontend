import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { ReminderModel } from '../../models';

import * as fromState from '../states';

export const remindersStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.RemindersState
> = createFeatureSelector<fromState.RemindersState>('reminders');

export const remindersEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  ReminderModel[]
> = createSelector(
  remindersStateSelector,
  fromState.getReminderEntities
);

export const remindersCategoriesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  remindersStateSelector,
  fromState.getRemindersCategories
);

export const remindersIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  remindersStateSelector,
  fromState.getRemindersIsLoading
);

export const subremindersForMonthSelector = (
  year: string | number,
  month: string | number
): MemoizedSelector<fromState.StoreState, any> =>
  createSelector(
    remindersStateSelector,
    (state: fromState.RemindersState) => {
      const categories = fromState.getRemindersCategories(state);
      if (!categories[year] || !categories[year].content[month]) {
        return [];
      }
      return categories[year].content[month].content;
    }
  );

export const upcomingRemindersSelector: MemoizedSelector<
  fromState.StoreState,
  ReminderModel[]
> = createSelector(
  remindersStateSelector,
  fromState.getUpcomingReminders
);
