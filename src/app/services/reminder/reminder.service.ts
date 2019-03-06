import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../config';
import { HttpService } from '../http';

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

  createReminders(config): Observable<any> {
    const { courseId, name, startDate, endDate, endDate_no, repeats } = config;
    const type = endDate_no ? 'activity' : 'event';

    return this.httpService.httpAuthPost(
      this.getCourseServiceBackendUrl() + '/' + courseId + '/reminder',
      {
        name,
        startDate,
        endDate,
        endDate_no,
        type,
        repeats
      }
    );
  }

  deleteReminder(reminderId: string): Observable<any> {
    return this.httpService.httpAuthDelete(
      this.getBackendUrl() + '/' + reminderId
    );
  }

  private getBackendUrl(): string {
    return this.configService.getBackendUrl() + '/reminder';
  }

  private getCourseServiceBackendUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
