import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateClientResponse } from '../symbol/create-client.response';
import { NewBuyout } from '../symbol/phone.interface';

@Injectable({
  providedIn: 'root'
})
export class BuydropHttp {

  url = environment.localhost + '/buyout'

  constructor(private readonly http: HttpClient) { }


  addPhone(phone:NewBuyout): Observable<CreateClientResponse>{
    const newUrl = this.url + '/add'
    return this.http.post<CreateClientResponse>(newUrl, phone)
  }


}
