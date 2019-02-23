import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  httpGet(url: string, options: any = {}): Observable<any> {
    return this.httpClient.get(url, options);
  }

  httpPost(url: string, options: any = {}): Observable<any> {
    return this.httpClient.post(url, options);
  }

  httpPut(url: string, options: any = {}): Observable<any> {
    return this.httpClient.put(url, options);
  }

  httpDelete(url: string, options: any = {}): Observable<any> {
    return this.httpClient.delete(url, options);
  }
}
