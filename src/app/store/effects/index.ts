export * from './auth.effect';
export * from './course.effect';
export * from './courses.effect';

import { AuthEffects } from './auth.effect';
import { CourseEffects } from './course.effect';
import { CoursesEffects } from './courses.effect';

export const effects: any[] = [AuthEffects, CourseEffects, CoursesEffects];
