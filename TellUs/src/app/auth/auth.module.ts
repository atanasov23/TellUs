import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { InputValidationService } from './services/register-input-validation.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterService, InputValidationService],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
