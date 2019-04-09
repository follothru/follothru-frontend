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

  private getServiceUrl(): string {
    return this.configService.getBackendUrl() + '/email';
  }
}
