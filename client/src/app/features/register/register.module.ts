import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { ComponentsModule } from './components/components.module';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterHttp } from './services/register.http';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [RegisterHttp]
})
export class RegisterModule { }
