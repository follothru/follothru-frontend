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
    return this.httpService.httpAuthPost(this.getBackendUrl(), config);
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
