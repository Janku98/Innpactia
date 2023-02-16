import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './views/login/login.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule
  ]
})
export class LoginModule { }
