import * as fromState from '../states';
import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export const authStateSelector: MemoizedSelector<
  any,
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

export const authIsErrorSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  authStateSelector,
  fromState.isAuthError
);
