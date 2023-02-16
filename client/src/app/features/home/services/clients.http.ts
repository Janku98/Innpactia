import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateClientResponse } from '../symbol/create-client.response';
import { ClientByIdResponse, GetClientsResponse, NewClient } from '../symbol/get-clients.response';

@Injectable({
  providedIn: 'root'
})
export class ClientsHttp {

  url = environment.localhost + '/clients'

  constructor(private readonly http: HttpClient) { }

  getAllClients(): Observable<GetClientsResponse[]>{
    return this.http.get<GetClientsResponse[]>(this.url)
  }

  createNewClient(payload:NewClient): Observable<CreateClientResponse>{
    const newUrl = this.url + '/add'
    return this.http.post<CreateClientResponse>(newUrl,payload) 
  }

  getClientById(id:number): Observable<ClientByIdResponse[]>{
    return this.http.get<ClientByIdResponse[]>(this.url + `/${id}` ) 
  }

}
