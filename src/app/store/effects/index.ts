export * from './auth.effect';
export * from './course.effect';
export * from './courses.effect';
export * from './reminders.effect';
export * from './router.effect';
export * from './user.effect';
export * from './email.effect';
export * from './student-side';

import { AuthEffects } from './auth.effect';
import { CourseEffects } from './course.effect';
import { CoursesEffects } from './courses.effect';
import { RemindersEffects } from './reminders.effect';
import { RouterEffects } from './router.effect';
import { UserEffects } from './user.effect';
import { EmailEffects } from './email.effect';
import { StudentEnrollEffects } from './student-side';

export const effects: any[] = [
  AuthEffects,
  CourseEffects,
  CoursesEffects,
  RemindersEffects,
  RouterEffects,
  UserEffects,
  EmailEffects,
  StudentEnrollEffects
];
