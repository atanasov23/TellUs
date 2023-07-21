import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewTestComponent } from './components/main-view-test/main-view-test.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainViewTestComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class UserViewModule { }
