import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormRegister, ResponseRegister } from '../symbol/register-interface';


@Injectable({
  providedIn: 'root'
})
export class RegisterHttp {

  private url = environment.localhost + '/register'

  constructor(private readonly http: HttpClient) { }

  sendRegister(payload:FormRegister): Observable<ResponseRegister>{
    return this.http.post<ResponseRegister>(this.url, payload)
  }

}
