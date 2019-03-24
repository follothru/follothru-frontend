import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';
import { UserModel } from 'src/app/models';

export const userStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.UserState
> = createFeatureSelector<fromState.UserState>('user');

export const usersSelector: MemoizedSelector<
  fromState.StoreState,
  UserModel[]
> = createSelector(
  userStateSelector,
  fromState.getUsers
);

export const usersIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  userStateSelector,
  fromState.getUsersIsLoading
);
