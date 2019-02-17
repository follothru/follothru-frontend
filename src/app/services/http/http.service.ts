import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  httpGet(url: string, options: any = {}): Observable<any> {
    return this.httpClient
      .get(url, options)
      .pipe(catchError(err => of({ isError: true, err })));
  }

  httpPost(url: string, options: any = {}): Observable<any> {
    return this.httpClient
      .post(url, options)
      .pipe(catchError(err => of({ isError: true, err })));
  }
}
