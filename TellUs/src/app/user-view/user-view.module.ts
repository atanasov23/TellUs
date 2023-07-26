import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPublicationsViewComponent } from './components/user-publications-view/user-publications-view.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CreationComponent } from './components/creation/creation.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MainPostViewComponent } from './components/main-post-view/main-post-view.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserPublicationsViewComponent,
    EditComponent,
    CreationComponent,
    PostDetailsComponent,
    MainPostViewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserViewModule { }
