import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewTestComponent } from './components/main-view-test/main-view-test.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPublicationsViewComponent } from './components/user-publications-view/user-publications-view.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainViewTestComponent,
    UserProfileComponent,
    UserPublicationsViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserViewModule { }
