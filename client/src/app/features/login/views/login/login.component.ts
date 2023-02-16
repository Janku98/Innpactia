import { Component} from '@angular/core';
import { FormLogin } from '../../symbol/login-inteface';
import { LoginPresenter } from './login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginPresenter]
})
export class LoginComponent  {

  constructor(private readonly presenter: LoginPresenter) { }

  submitForm(form: FormLogin): void {
    this.presenter.sendLogin(form)
  }

}
