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
    return this.httpService.httpGet(this.getBackendUrl(), { params });
  }

  private getBackendUrl(): string {
    return this.configService.getBackendUrl() + '/reminder';
  }
}
