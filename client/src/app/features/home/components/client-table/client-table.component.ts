import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GetClientsResponse } from '../../symbol/get-clients.response';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent {

  clients:GetClientsResponse[]|null|undefined = [];

  @Input() set clientsData(data:GetClientsResponse[]|null|undefined){
    this.clients = data;
  }

  constructor(private readonly router: Router) { }

 
  inspectClient(clientId:number):void {
    this.router.navigate(['/home/client'], {queryParams: {clientId: clientId}});
  }

}
