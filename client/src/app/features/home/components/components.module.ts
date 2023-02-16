import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientTableComponent } from './client-table/client-table.component';
import { ModalNewClientComponent } from './modal-new-client/modal-new-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';



@NgModule({
  declarations: [
    ClientTableComponent,
    ModalNewClientComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientTableComponent,
    ModalNewClientComponent,
    ClientComponent
  ]
})
export class ComponentsModule { }
