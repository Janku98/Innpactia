import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { PresenterItemState } from 'src/app/core/symbol/presenter-item.interface';
import { BuydropHttp } from '../../services/buydrop.http';
import { GetAllBuyouts } from '../../symbol/get-all-buyouts.interface';


const firstState: PresenterItemState<null> = {state: "loading", payload: null}


@Injectable()
export class TableCashboxPresenter {

  private buyouts = new BehaviorSubject<PresenterItemState<GetAllBuyouts[] | null>>(firstState)
  buyouts$ = this.buyouts.asObservable()

  destroy$ = new Subject();

  constructor(private readonly buydropshttp:BuydropHttp) { }

  run():void {
    this.getBuydrops()
  }

  getBuydrops():void {
    this.buydropshttp.getAllBuyouts()
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      if(response.success === true){
        this.buyouts.next({state: 'loaded', payload: response.results})
      }else if(response.success === false){
        this.buyouts.next({state: 'error', payload: null})
      }
    })
  }

}


