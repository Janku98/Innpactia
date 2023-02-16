import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormLogin, LoginResponse } from '../symbol/login-inteface';

@Injectable()
export class LoginHttp {

  private url = environment.localhost + '/login'

  constructor(private readonly http: HttpClient) { }

  sendLogin(payload:FormLogin): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.url, payload)
  }
}
