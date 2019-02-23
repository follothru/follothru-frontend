import { ActionReducerMap } from '@ngrx/store';

import { AuthReducer } from './auth.reducer';
import { AlertReducers } from './alert.reducer';
import { CourseReducer } from './course.reducer';
import { CoursesReducer } from './courses.reducer';

import * as fromState from '../states';

export * from './auth.reducer';
export * from './alert.reducer';
export * from './course.reducer';
export * from './courses.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  auth: AuthReducer,
  alert: AlertReducers,
  course: CourseReducer,
  courses: CoursesReducer
};
