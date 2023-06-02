import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashBoxRoutingModule } from './cash-box-routing.module';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CashBoxRoutingModule,
    ComponentsModule
  ],
  providers: []
})
export class CashBoxModule { }
