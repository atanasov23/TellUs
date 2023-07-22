import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { UserProfileImageComponent } from './components/user-profile-image/user-profile-image.component';

@NgModule({
  declarations: [
    AppLogoComponent,
    UserProfileImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AppLogoComponent,UserProfileImageComponent]
})
export class SharedModule { }
