import { ActionReducerMap } from '@ngrx/store';

import { AuthReducer } from './auth.reducer';
import { AlertReducers } from './alert.reducer';
import { CourseReducer } from './course.reducer';
import { CoursesReducer } from './courses.reducer';
import { RemindersReducer } from './reminders.reducer';
import { SessionReducer } from './session.reducer';
import { UserReducer } from './user.reducer';

import * as fromState from '../states';

export * from './auth.reducer';
export * from './alert.reducer';
export * from './course.reducer';
export * from './courses.reducer';
export * from './reminders.reducer';
export * from './session.reducer';
export * from './user.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  auth: AuthReducer,
  alert: AlertReducers,
  course: CourseReducer,
  courses: CoursesReducer,
  reminders: RemindersReducer,
  session: SessionReducer,
  user: UserReducer
};
