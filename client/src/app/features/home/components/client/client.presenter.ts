import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { PresenterItemState } from 'src/app/core/symbol/presenter-item.interface';
import { ClientsHttp } from '../../services/clients.http';
import { PhoneHttp } from '../../services/phone.http';
import { ClientByIdResponse } from '../../symbol/get-clients.response';
import { NewPhone } from '../../symbol/phone.interface';

const firstState: PresenterItemState<null> = {state: "loading", payload: null}

@Injectable()
export class ClientPresenter{

  private client = new BehaviorSubject<PresenterItemState<ClientByIdResponse[] | null>>(firstState)
  client$ = this.client.asObservable()

  destroy$ = new Subject();

  constructor(private readonly clientsHttp: ClientsHttp,
              private readonly phoneHttp: PhoneHttp) { }

  getClientById(id:number): void {
    this.clientsHttp.getClientById(id)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.client.next({state: "loaded", payload: response})
    })
  }


  createPhone(newPhone:NewPhone): void {
    this.phoneHttp.addPhone(newPhone)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      if(response.success === true){
        window.location.reload()
      }
    })
  }

}
