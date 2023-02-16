import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ClientsHttp } from '../../services/clients.http';
import { NewClient } from '../../symbol/get-clients.response';

@Injectable()
export class ModalNewClientPresenter {

  private viewState = new BehaviorSubject<string>('loaded')
  viewStateView$ = this.viewState.asObservable();

  destroy$ = new Subject();

  constructor(private readonly router: Router,
              private readonly clientHttp: ClientsHttp) { }


  createClient(client:NewClient):void {
    this.viewState.next('loading');
    this.clientHttp.createNewClient(client)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      console.log(response)
      if(response.success === true){
        this.router.navigate(['/home'])
      }else{
        window.alert('Error crando usuario')
      }
      
    })
  }

}
