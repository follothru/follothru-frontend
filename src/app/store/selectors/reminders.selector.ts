import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { ReminderModel, SubreminderModel } from '../../models';

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

export const subreminderCategoriesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  remindersStateSelector,
  fromState.getSubreminderCategories
);

export const eventCategoriesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  remindersStateSelector,
  fromState.getEventCategories
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
    subreminderCategoriesSelector,
    (categories: any) => {
      if (!categories[year] || !categories[year].content[month]) {
        return null;
      }
      return categories[year].content[month].content;
    }
  );

export const eventsForMonthSelector = (
  year: string | number,
  month: string | number
): MemoizedSelector<fromState.StoreState, any> =>
  createSelector(
    eventCategoriesSelector,
    (categories: any) => {
      if (!categories[year] || !categories[year].content[month]) {
        return [];
      }
      return categories[year].content[month].content;
    }
  );

export const focusedSubremindersSelector: MemoizedSelector<
  fromState.StoreState,
  SubreminderModel[]
> = createSelector(
  remindersStateSelector,
  fromState.getFocusedSubreminders
);

export const upcomingRemindersSelector: MemoizedSelector<
  fromState.StoreState,
  ReminderModel[]
> = createSelector(
  remindersStateSelector,
  fromState.getUpcomingReminders
);
