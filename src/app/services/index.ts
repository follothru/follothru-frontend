import { CourseService } from './course/course.service';
import { ConfigService } from './config/config.service';
import { ReminderService } from './reminder';
import { HttpService } from './http';

export * from './course';
export * from './reminder';
export * from './config';
export * from './http';

export const services: any[] = [
  CourseService,
  ConfigService,
  ReminderService,
  HttpService
];
