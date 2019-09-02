import { createSelector } from 'reselect';

export const authDomainSelector = state => state.auth;

export const loadingSelector = createSelector(
  authDomainSelector,
  substate => substate.loading
);

export const authErrorSelector = createSelector(
  authDomainSelector,
  substate => substate.error
);

export const tokenSelector = createSelector(
  authDomainSelector,
  substate => substate.token
);

export const userSelector = createSelector(
  authDomainSelector,
  substate => substate.user
);
