import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { RegisterHttp } from '../../services/register.http';
import { FormRegister } from '../../symbol/register-interface';

@Injectable()
export class RegisterPresenter {

  private viewState = new BehaviorSubject<string>('loaded')
  viewStateView$ = this.viewState.asObservable();

  destroy$ = new Subject();

  constructor(private readonly registerHttp: RegisterHttp,
              private readonly router: Router) { }

  sendRegister(payload:FormRegister):void {
    this.viewState.next('loading');
    this.registerHttp.sendRegister(payload)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      if(response.success === true){
        window.alert('Disculpa este metodo de notificacion; Tu usuario se ha registrado, te llevaremos al login')
        this.router.navigate(['/login'])

      }else{
        window.alert('Disculpa este metodo de notificacion; Ha ocurrido un error en el registro')
      }
    })
  }
}
