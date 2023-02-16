import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterBoxComponent } from './register-box/register-box.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    RegisterBoxComponent
  ]
})
export class ComponentsModule { }
