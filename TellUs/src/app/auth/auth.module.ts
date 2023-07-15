import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
