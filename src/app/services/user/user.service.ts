import { Injectable } from '@angular/core';
import { HttpService } from '../http';
import { Observable } from 'rxjs';

import { UserModel } from '../../models';
import { ConfigService } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  getAllUsers(): Observable<UserModel[]> {
    return this.httpService.httpAuthGet(this.getUserBackendUrl());
  }

  removeUser(userId: string): Observable<any> {
    return this.httpService.httpAuthDelete(
      this.getUserBackendUrl() + `/${userId}`
    );
  }

  assignAdmin(userId: string): Observable<any> {
    return this.httpService.httpAuthPut(
      this.getUserBackendUrl() + `/${userId}/assignAdmin`
    );
  }

  removeAdmin(userId: string): Observable<any> {
    return this.httpService.httpAuthPut(
      this.getUserBackendUrl() + `/${userId}/removeAdmin`
    );
  }

  private getUserBackendUrl(): string {
    return this.configService.getBackendUrl() + '/user';
  }
}
