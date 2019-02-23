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
    return this.httpService.httpAuthGet(this.getCourseUrl());
  }

  getCourseById(id: string): Observable<any> {
    return this.httpService.httpAuthGet(this.getCourseUrl() + '/' + id);
  }

  createNewCourse(
    name: string,
    endDate: Date,
    description: string
  ): Observable<any> {
    return this.httpService.httpAuthPost(this.getCourseUrl(), {
      name,
      endDate,
      description
    });
  }

  updateCourse(
    courseId: string,
    name: string,
    description: string,
    endDate: Date
  ): Observable<any> {
    return this.httpService.httpAuthPut(this.getCourseUrl() + '/' + courseId, {
      name,
      description,
      endDate
    });
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.httpService.httpAuthDelete(
      this.getCourseUrl() + '/' + courseId
    );
  }

  private getCourseUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
