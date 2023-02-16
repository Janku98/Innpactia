import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewPhone } from '../../symbol/phone.interface';
import { ClientPresenter } from './client.presenter';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientPresenter]
})
export class ClientComponent implements OnInit {

  clientId = 0

  client = this.presenter.client$

  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
  })


  constructor(private route: ActivatedRoute,
              private readonly fb: FormBuilder,
              private readonly presenter: ClientPresenter,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((p)=>{
      this.clientId = p['clientId'];
      this.presenter.getClientById(this.clientId)
    })
  }


  add():void{
    if(this.form.valid){
      let newPhone:NewPhone= {
        name:this.form.value.name,
        clientId: this.clientId
      }
      this.presenter.createPhone(newPhone);
      window.location.reload()
    }
  }

  goback():void{
    this.router.navigate(['/home'])
  }

}
