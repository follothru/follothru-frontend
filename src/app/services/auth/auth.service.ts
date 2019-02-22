import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
    const result$: Observable<any> = this.httpService
      .httpPost(this.getSessionBackendUrl(), {
        username,
        password
      })
      .pipe(
        switchMap(result => {
          if (result.isError) {
            this.signOut();
            return throwError(result);
          }
          this.setAuthToken(result.id);
          return of(result);
        })
      );
    return result$;
  }

  isSignedIn(): boolean {
    return this.getAuthToken() !== null;
  }

  resumeCurrentSession(): Observable<any> {
    return this.httpService.httpGet(
      this.getSessionBackendUrl() + '/' + this.getAuthToken()
    );
  }

  signOut() {
    sessionStorage.removeItem(this.AUTH_KEY);
  }

  getCurrentUser(): any {
    return null;
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
