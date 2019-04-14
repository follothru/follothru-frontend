import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { StudentEnrollStatus } from '../../states';

import * as fromState from '../../states';

export const studentEnrollStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.StudentEnrollState
> = createFeatureSelector<fromState.StudentEnrollState>('studentEnroll');

export const courseEnrollInfoSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  studentEnrollStateSelector,
  fromState.getCourseEnrollInfo
);

export const studentEnrollStatusSelector: MemoizedSelector<
  fromState.StoreState,
  StudentEnrollStatus
> = createSelector(
  studentEnrollStateSelector,
  fromState.getStudentEnrollStatus
);

export const studentEnrollIsLoadingSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  studentEnrollStateSelector,
  fromState.isStudentEnrollLoading
);
