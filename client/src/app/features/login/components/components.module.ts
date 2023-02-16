import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginBoxComponent } from './login-box/login-box.component';



@NgModule({
  declarations: [LoginBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginBoxComponent]
})
export class ComponentsModule { }
