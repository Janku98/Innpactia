import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormRegister } from '../../symbol/register-interface';

@Component({
  selector: 'app-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent  {

  form: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  })

  @Output() emitForm = new EventEmitter<FormRegister>();


  constructor(private readonly fb: FormBuilder,
              private readonly router: Router) { }

              

  goToLogIn(): void {
    this.router.navigate(['/login'])
  }

  register(): void {
    if (this.form.valid) {
        this.emitForm.emit(this.form.value);
        return;
    }
    this.form.markAllAsTouched()
  }
  
}
