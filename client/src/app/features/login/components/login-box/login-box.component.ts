import { Component, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FormLogin } from '../../symbol/login-inteface';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent {

  form: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  @Output() emitForm = new EventEmitter<FormLogin>();

  constructor(private readonly fb: FormBuilder) { }

  login(): void {
    if (this.form.valid) {
        this.emitForm.emit(this.form.value);
        return;
    }
    this.form.markAllAsTouched()
  }

}
