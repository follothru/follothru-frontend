import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpService } from '../http';
import { ConfigService } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  getCourses(): Observable<any> {
    return this.httpService.httpGet(this.getCourseUrl());
  }

  getCourseById(id: string): Observable<any> {
    return this.httpService.httpGet(this.getCourseUrl() + '/' + id);
  }

  private getCourseUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
