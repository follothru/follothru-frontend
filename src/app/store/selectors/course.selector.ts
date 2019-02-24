import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const courseStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.CourseState
> = createFeatureSelector<fromState.CourseState>('course');

export const courseEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  courseStateSelector,
  fromState.getCourseEntities
);

export const courseIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  courseStateSelector,
  fromState.getCourseIsLoading
);
