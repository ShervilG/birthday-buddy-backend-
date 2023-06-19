import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly BACKEND_BASE_URL = environment.BACKEND_BASE_URL;

  constructor(private readonly httpClient: HttpClient) { }

  get<T>(url: string, options?: object) : Observable<T> {
    const fullUrl = this.BACKEND_BASE_URL + url;
    return this.httpClient.get<T>(fullUrl, options);
  }
}
