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
    const params = { courseId };
    return this.httpService.httpGet(
      this.getCourseServiceBackendUrl() + '/' + courseId + '/reminder',
      { params }
    );
  }

  createReminders(config): Observable<any> {
    return this.httpService.httpPost(this.getBackendUrl(), config);
  }

  private getBackendUrl(): string {
    return this.configService.getBackendUrl() + '/reminder';
  }

  private getCourseServiceBackendUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
