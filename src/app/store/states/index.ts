import { AuthState } from './auth.state';
import { AlertState } from './alert.state';
import { CourseState } from './course.state';
import { CoursesState } from './courses.state';

export * from './auth.state';
export * from './alert.state';
export * from './course.state';
export * from './courses.state';

export interface StoreState {
  auth: AuthState;
  alert: AlertState;
  course: CourseState;
  courses: CoursesState;
}
