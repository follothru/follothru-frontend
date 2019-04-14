import { Injectable } from '@angular/core';

import { ConfigService } from '../config';
import { HttpService } from '../http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  studentEnrollValidation(courseId: string, email: string): Observable<any> {
    return this.httpService.httpGet(
      this.getCourseServiceUrl() + `/${courseId}/validateEnroll`,
      { params: { email } }
    );
  }

  private getCourseServiceUrl(): string {
    return this.configService.getBackendUrl() + '/course';
  }
}
