import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/own-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPublicationsViewComponent } from './components/own-publications-view/user-publications-view.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CreationComponent } from './components/creation/creation.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MainPostViewComponent } from './components/main-post-view/main-post-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPublicationComponent } from './components/user-details/user-publication/user-publication.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserPublicationsViewComponent,
    EditComponent,
    CreationComponent,
    PostDetailsComponent,
    MainPostViewComponent,
    UserDetailsComponent,
    UserPublicationComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserViewModule { }
