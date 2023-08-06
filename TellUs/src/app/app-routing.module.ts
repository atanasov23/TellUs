import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserProfileComponent } from './user-view/components/profile/user-profile.component';
import { CreationComponent } from './user-view/components/creation/creation.component';
import { PostDetailsComponent } from './user-view/components/post-details/post-details.component';
import { MainPostViewComponent } from './user-view/components/main-post-view/main-post-view.component';
import { UserDetailsComponent } from './user-view/components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: MainPostViewComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'profile', component: UserProfileComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'creation', component: CreationComponent },
  { path: 'p/:id', component: PostDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
