import { AuthState } from './auth.state';
import { AlertState } from './alert.state';
import { CourseState } from './course.state';
import { CoursesState } from './courses.state';
import { RemindersState } from './reminders.state';
import { SessionState } from './session.state';
import { UserState } from './user.state';
import { EmailState } from './email.state';

export * from './auth.state';
export * from './alert.state';
export * from './course.state';
export * from './courses.state';
export * from './reminders.state';
export * from './session.state';
export * from './user.state';
export * from './email.state';

export interface StoreState {
  auth: AuthState;
  alert: AlertState;
  course: CourseState;
  courses: CoursesState;
  reminders: RemindersState;
  session: SessionState;
  user: UserState;
  email: EmailState;
}
