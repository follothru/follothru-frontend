import { CourseService } from './course/course.service';
import { ConfigService } from './config/config.service';
import { ReminderService } from './reminder';
import { HttpService } from './http';
import { AuthService } from './auth';
import { UserService } from './user';
import { EmailService } from './email';

export * from './course';
export * from './reminder';
export * from './config';
export * from './http';
export * from './auth';
export * from './user';
export * from './email';

export const services: any[] = [
  CourseService,
  ConfigService,
  ReminderService,
  HttpService,
  AuthService,
  UserService,
  EmailService
];
