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

  createNewCourse(
    name: string,
    endDate: Date,
    description: string
  ): Observable<any> {
    return this.httpService.httpPost(this.getCourseUrl(), {
      name,
      endDate,
      description
    });
  }

  modifyCourse(
    courseId: string,
    name: string,
    description: string,
    endDate: Date
  ) {
    return this.httpService.httpPut(this.getCourseUrl() + '/' + courseId, {
      name,
      description,
      endDate
    });
  }

  private getCourseUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
