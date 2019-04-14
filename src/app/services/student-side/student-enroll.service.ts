import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../config';
import { HttpService } from '../http';
import { StudentEnrollStatus } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class StudentEnrollService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  getStudentEnrollStatus(
    courseId: string,
    studentId: string
  ): Observable<StudentEnrollStatus> {
    return this.httpService.httpGet(
      this.getCourseServiceUrl() +
        `/${courseId}/student/${studentId}/enrollStatus`
    );
  }

  getCourseEnrollInfo(courseId: string): Observable<any> {
    return this.httpService.httpGet(
      this.getCourseServiceUrl() + `/${courseId}/enrollInfo`
    );
  }

  studentEnroll(courseId: string, data: any): Observable<any> {
    return this.httpService.httpPost(
      this.getCourseServiceUrl() + `/${courseId}/student`,
      data
    );
  }

  private getCourseServiceUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
