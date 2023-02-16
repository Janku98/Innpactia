import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewClient } from '../../symbol/get-clients.response';
import { ModalNewClientPresenter } from './modal-new-client.presenter';

@Component({
  selector: 'app-modal-new-client',
  templateUrl: './modal-new-client.component.html',
  styleUrls: ['./modal-new-client.component.css'],
  providers: [ModalNewClientPresenter]
})
export class ModalNewClientComponent {

  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
  })


  constructor(private readonly router: Router,
              private readonly fb: FormBuilder,
              public dialogRef: MatDialogRef<void>,
              private readonly presenter: ModalNewClientPresenter) { }

  cancel(): void {
    this.dialogRef.close("cancelar");
  }

  create(): void {
    if(this.form.valid){
      let newClient:NewClient=this.form.value
      this.presenter.createClient(newClient);
      this.cancel()
      window.location.reload()
    }
  }

}
