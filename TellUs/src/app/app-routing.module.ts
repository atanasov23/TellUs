import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewTestComponent } from './user-view/components/main-view-test/main-view-test.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserProfileComponent } from './user-view/components/user-profile/user-profile.component';
import { CreationComponent } from './user-view/components/creation/creation.component';

const routes: Routes = [
  { path: '', component: MainViewTestComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'creation', component: CreationComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
