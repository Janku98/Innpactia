import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

import { ClientsHttp } from '../../services/clients.http';
import { GetClientsResponse } from '../../symbol/get-clients.response';
import { PresenterItemState } from 'src/app/core/symbol/presenter-item.interface';

const firstState: PresenterItemState<null> = {state: "loading", payload: null}


@Injectable()
export class HomePresenter {

  private clients = new BehaviorSubject<PresenterItemState<GetClientsResponse[] | null>>(firstState)
  clients$ = this.clients.asObservable()

  destroy$ = new Subject();

  constructor(private readonly clientsHttp: ClientsHttp) { }

  run(): void {
    this.getClients()
  }

  getClients(): void {
    this.clientsHttp.getAllClients()
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      this.clients.next({state: 'loaded', payload: response})
    })
  }
}
