import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ConfigService } from '../config';
import { HttpService } from '../http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_KEY = 'auth';

  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

  authenticateUser(username: string, password: string): Observable<any> {
    return this.httpService
      .httpPost(this.getSessionBackendUrl(), { username, password })
      .pipe(
        tap(result => {
          this.setAuthToken(result.id);
        }),
        catchError(err => {
          sessionStorage.removeItem(this.AUTH_KEY);
          return throwError(err.error);
        })
      );
  }

  resumeCurrentSession(): Observable<any> {
    if (this.getAuthToken() === null) {
      return throwError(false);
    }
    return this.httpService.httpGet(
      this.getSessionBackendUrl() + '/' + this.getAuthToken()
    );
  }

  isSignedIn(): boolean {
    return this.getAuthToken() !== null;
  }

  signOut() {
    sessionStorage.removeItem(this.AUTH_KEY);
  }

  getAuthToken(): string {
    return sessionStorage.getItem(this.AUTH_KEY);
  }

  private setAuthToken(auth: string) {
    sessionStorage.setItem(this.AUTH_KEY, auth);
  }

  private getSessionBackendUrl(): string {
    return this.configService.getBackendUrl() + '/session';
  }
}
