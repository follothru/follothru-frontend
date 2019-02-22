import { CourseService } from './course/course.service';
import { ConfigService } from './config/config.service';
import { ReminderService } from './reminder';
import { HttpService } from './http';
import { AuthService } from './auth';

export * from './course';
export * from './reminder';
export * from './config';
export * from './http';
export * from './auth';

export const services: any[] = [
  CourseService,
  ConfigService,
  ReminderService,
  HttpService,
  AuthService
];
