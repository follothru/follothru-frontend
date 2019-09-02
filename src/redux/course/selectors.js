import { createSelector } from 'reselect';

export const courseDomainSelector = state => state.course;

export const courseSelector = createSelector(
  courseDomainSelector,
  substate => substate.course
);

export const courseLoadingSelector = createSelector(
  courseDomainSelector,
  substate => substate.loading
);
