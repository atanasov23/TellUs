import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewTestComponent } from './user-view/components/main-view-test/main-view-test.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
  { path: '', component: MainViewTestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
