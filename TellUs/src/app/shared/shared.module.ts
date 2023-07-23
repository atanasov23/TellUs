import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { UserProfileImageComponent } from './components/user-profile-image/user-profile-image.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AppLogoComponent,
    UserProfileImageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [AppLogoComponent,UserProfileImageComponent]
})
export class SharedModule { }
