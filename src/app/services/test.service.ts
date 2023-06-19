import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TEST_API_BASE_URL, PING_API_URL } from '../constants/url';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private readonly httpService: HttpService) { }

  pingBackendService() : Observable<string> {
    const completeUrl = TEST_API_BASE_URL + PING_API_URL;
    const httpOptions = {
      responseType: 'text'
    };

    return this.httpService.get<string>(completeUrl, httpOptions);
  }
}
