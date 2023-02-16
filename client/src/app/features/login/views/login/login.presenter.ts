import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';
import { LoginHttp } from '../../services/login.http';
import { FormLogin } from '../../symbol/login-inteface';

@Injectable()
export class LoginPresenter {

  private viewState = new BehaviorSubject<string>('loaded')
  viewStateView$ = this.viewState.asObservable();

  destroy$ = new Subject();

  constructor( private readonly router: Router,
                private readonly loginHttp: LoginHttp,
                private readonly tokenService: TokenService) { }

  sendLogin(payload:FormLogin):void {
    this.viewState.next('loading');
    this.loginHttp.sendLogin(payload)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe((response)=>{
      console.log(response)
      if(response.success === true){
        this.tokenService.saveToken(response.userLogged) 
        this.router.navigate(['/home'])
      }else {
        window.alert('Ha ocurrido un error en el logeo')
      }
    })
  }
}
