import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../config';
import { HttpService } from '../http';
import { ReminderModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  getRemindersByCourseId(courseId: string): Observable<any> {
    return this.httpService.httpAuthGet(
      this.getCourseServiceBackendUrl() + '/' + courseId + '/reminder'
    );
  }

  createReminders(config): Observable<ReminderModel> {
    const {
      courseId,
      name,
      startDateTime,
      endDateTime,
      repeats,
      type,
      sendTime
    } = config;

    return this.httpService.httpAuthPost(
      this.getCourseServiceBackendUrl() + '/' + courseId + '/reminder',
      {
        name,
        startDateTime,
        endDateTime,
        type,
        repeats,
        sendTime
      }
    );
  }

  deleteReminder(reminderId: string): Observable<any> {
    return this.httpService.httpAuthDelete(
      this.getBackendUrl() + '/' + reminderId
    );
  }

  getUpcomingReminders(): Observable<any> {
    return this.httpService.httpAuthGet(this.getBackendUrl());
  }

  private getBackendUrl(): string {
    return this.configService.getBackendUrl() + '/reminder';
  }

  private getCourseServiceBackendUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
