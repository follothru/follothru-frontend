import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { UserModel } from '../../models';

import * as fromState from '../states';

export const SessionStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.SessionState
> = createFeatureSelector<fromState.SessionState>('session');

export const SessionCurrentUserSelector: MemoizedSelector<
  fromState.StoreState,
  UserModel
> = createSelector(
  SessionStateSelector,
  fromState.getSessionCurrentUser
);

export const SessionCurrentUserGroupsSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  SessionStateSelector,
  fromState.getSessionCurrentUserGroups
);

export const SessionCurrentSessionSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  SessionStateSelector,
  fromState.getSessionCurrentSession
);
