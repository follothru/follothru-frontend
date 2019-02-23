import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const authStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.AuthState
> = createFeatureSelector<fromState.AuthState>('auth');

export const authEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  authStateSelector,
  fromState.getAuthEntities
);

export const authIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  authStateSelector,
  fromState.isAuthLoading
);

export const authIsSuccessSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  authStateSelector,
  fromState.isAuthSuccess
);

export const authErrorSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  authStateSelector,
  fromState.getAuthError
);
