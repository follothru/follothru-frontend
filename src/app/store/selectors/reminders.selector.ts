import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const remindersStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.RemindersState
> = createFeatureSelector<fromState.RemindersState>('reminders');

export const remindersEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  remindersStateSelector,
  fromState.getReminderEntities
);

export const remindersIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  remindersStateSelector,
  fromState.getRemindersIsLoading
);
