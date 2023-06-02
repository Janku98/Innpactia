import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/core/services/token.service';
import { HomePresenter } from './home.presenter';
import { ModalNewClientComponent } from '../../components/modal-new-client/modal-new-client.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomePresenter]
})
export class HomeComponent implements OnInit {

  user = '';

  clients = this.presenter.clients$

  constructor(private readonly tokenService: TokenService,
              private readonly presenter: HomePresenter,
              public dialog: MatDialog,
              private readonly router: Router) { }

  ngOnInit(): void {
    let getUser = this.tokenService.getToken()
    this.user = getUser;
    this.presenter.run()
  }

  openDialogNewClient(): void {
    const dialogRef = this.dialog.open(ModalNewClientComponent,{
      panelClass: 'custom-modalbox',
       disableClose: true
      })
    dialogRef.afterClosed()
  }

  goToCashBox(): void {
    this.router.navigate(['/cashbox'])
  }

  logOut(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/login'])
  }

}
