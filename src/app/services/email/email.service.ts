import { Injectable } from '@angular/core';
import { HttpService } from '../http';
import { ConfigService } from '../config';
import { Observable } from 'rxjs';

import { EmailTemplateModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  getEmailTemplates(): Observable<EmailTemplateModel[]> {
    return this.httpService.httpAuthGet(this.getServiceUrl() + '/templates');
  }

  setReminderEmail(
    reminderId: string,
    templateIds: string[],
    values: any
  ): Observable<any> {
    return this.httpService.httpAuthPut(
      this.getReminderServiceUrl() + `/${reminderId}/email`,
      {
        templateIds,
        values
      }
    );
  }

  setSubreminderEmail(
    subreminderId: string,
    templateIds: string[],
    values: any
  ): Observable<any> {
    return this.httpService.httpAuthPut(
      this.getReminderServiceUrl() + `/subreminder/${subreminderId}/email`,
      {
        templateIds,
        values
      }
    );
  }

  private getServiceUrl(): string {
    return this.configService.getBackendUrl() + '/email';
  }

  private getReminderServiceUrl(): string {
    return this.configService.getBackendUrl() + '/reminder';
  }
}
