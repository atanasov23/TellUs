import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { UserProfileComponent } from './user-view/components/profile/user-profile.component';
import { CreationComponent } from './user-view/components/creation/creation.component';
import { PostDetailsComponent } from './user-view/components/post-details/post-details.component';
import { MainPostViewComponent } from './user-view/components/main-post-view/main-post-view.component';
import { UserDetailsComponent } from './user-view/components/user-details/user-details.component';
import { MessageBoxComponent } from './user-view/components/message-box/message-box.component';
import { MyMessagesComponent } from './user-view/components/my-messages/my-messages.component';
import { ShowImageComponent } from './user-view/components/show-image/show-image.component';
import { ShowVideoComponent } from './user-view/components/show-video/show-video.component';
import { SearchComponent } from './user-view/components/search/search.component';

const routes: Routes = [
  { path: '', component: MainPostViewComponent },
  { path: 'search', component: SearchComponent },
  { path: 'images', component: ShowImageComponent },
  { path: 'videos', component: ShowVideoComponent },
  { path: 'user/:id/message/:id', component: MessageBoxComponent },
  { path: 'myMessages', component: MyMessagesComponent },
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
