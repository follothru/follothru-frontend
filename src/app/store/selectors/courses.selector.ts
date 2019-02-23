import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const coursesStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.CoursesState
> = createFeatureSelector<fromState.CoursesState>('courses');

export const coursesEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  coursesStateSelector,
  fromState.getCoursesEntities
);

export const coursesIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  coursesStateSelector,
  fromState.getCoursesIsLoading
);
