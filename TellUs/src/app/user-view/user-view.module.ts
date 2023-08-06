import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { CreationComponent } from './components/creation/creation.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MainPostViewComponent } from './components/main-post-view/main-post-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPublicationComponent } from './components/user-details/user-publication/user-publication.component';
import { UserFollowedComponent } from './components/user-details/user-followed/user-followed.component';
import { UserFollowersComponent } from './components/user-details/user-followers/user-followers.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    EditComponent,
    CreationComponent,
    PostDetailsComponent,
    MainPostViewComponent,
    UserDetailsComponent,
    UserPublicationComponent,
    UserFollowedComponent,
    UserFollowersComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserViewModule { }
