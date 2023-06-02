import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewBuyout} from '../../symbol/phone.interface';
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
    item: [null, [Validators.required]],
    size: [null, [Validators.required]],
    price:[null, [Validators.required]],
    usdValue:[null, [Validators.required]],
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
      let newBuy:NewBuyout= {
        item :this.form.value.item,
        talle: this.form.value.size,
        clientId: this.clientId,
        price: this.form.value.price,
        usdValue: this.form.value.usdValue
      }
      this.presenter.createBuydrop(newBuy);
      window.location.reload()
    }
  }

  goback():void{
    this.router.navigate(['/home'])
  }

}
