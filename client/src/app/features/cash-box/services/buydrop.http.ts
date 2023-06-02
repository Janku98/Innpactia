import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGeneral } from 'src/app/core/symbol/presenter-item.interface';
import { environment } from 'src/environments/environment';
import { GetAllBuyouts } from '../symbol/get-all-buyouts.interface';


@Injectable({
  providedIn: 'root'
})
export class BuydropHttp {

  url = environment.localhost + '/buyout'

  constructor(private readonly http: HttpClient) { }


  getAllBuyouts(): Observable<ResponseGeneral<GetAllBuyouts[]>>{
    const newUrl = this.url + '/list'
    return this.http.get<ResponseGeneral<GetAllBuyouts[]>>(newUrl)
  }


}