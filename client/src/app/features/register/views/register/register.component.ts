import { Component } from '@angular/core';
import { FormRegister } from '../../symbol/register-interface';
import { RegisterPresenter } from './register.presenter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterPresenter]
})
export class RegisterComponent{

  constructor(private readonly presenter: RegisterPresenter) { }

  submitForm(form: FormRegister): void {
    this.presenter.sendRegister(form)
  }

}
