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
    description: string,
    hasPlanningPrompt,
    planningPrompt
  ): Observable<any> {
    return this.httpService.httpAuthPost(this.getCourseUrl(), {
      name,
      endDate,
      description,
      hasPlanningPrompt,
      planningPrompt
    });
  }

  updateCourse(
    courseId: string,
    name: string,
    endDate: Date,
    hasPlanningPrompt: boolean,
    planningPrompt: string
  ): Observable<any> {
    return this.httpService.httpAuthPut(this.getCourseUrl() + '/' + courseId, {
      name,
      endDate,
      hasPlanningPrompt,
      planningPrompt
    });
  }

  deleteCourse(courseId: string): Observable<any> {
    return this.httpService.httpAuthDelete(
      this.getCourseUrl() + '/' + courseId
    );
  }

  getEnrolledStudents(courseId: string): Observable<any[]> {
    return this.httpService.httpAuthGet(
      this.getCourseUrl() + `/${courseId}/student`
    );
  }

  private getCourseUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
