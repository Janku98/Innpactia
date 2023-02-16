import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsHttp } from './services/clients.http';
import {MatDialogModule} from '@angular/material/dialog';
import { PhoneHttp } from './services/phone.http';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
  providers: [ClientsHttp, PhoneHttp]
})
export class HomeModule { }
