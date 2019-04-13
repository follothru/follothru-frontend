import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  httpGet(url: string, options: any = {}): Observable<any> {
    options.headers = this.getHeaders();
    return this.httpClient.get(url, options);
  }

  httpPost(url: string, data: any = {}): Observable<any> {
    const options = { headers: this.getHeaders() };
    return this.httpClient.post(url, data, options);
  }

  httpPut(url: string, data: any = {}): Observable<any> {
    const options = { headers: this.getHeaders() };
    return this.httpClient.put(url, data, options);
  }

  httpDelete(url: string, options: any = {}): Observable<any> {
    options.headers = this.getHeaders();
    return this.httpClient.delete(url, options);
  }

  httpAuthGet(url: string, options: any = {}): Observable<any> {
    options.headers = this.getAuthHeaders();
    return this.httpClient.get(url, options);
  }

  httpAuthPost(url: string, data: any = {}): Observable<any> {
    const options = { headers: this.getAuthHeaders() };
    return this.httpClient.post(url, data, options);
  }

  httpAuthPut(url: string, data: any = {}): Observable<any> {
    const options = { headers: this.getAuthHeaders() };
    return this.httpClient.put(url, data, options);
  }

  httpAuthDelete(url: string, body: any = {}): Observable<any> {
    const options = { headers: this.getAuthHeaders(), body };
    return this.httpClient.delete(url, options);
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthToken()
    });
  }

  private getAuthToken(): string {
    return sessionStorage.getItem('auth');
  }
}
