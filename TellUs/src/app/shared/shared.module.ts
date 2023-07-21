import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogoComponent } from './components/app-logo/app-logo.component';
import { UserProfileImageComponent } from './components/user-profile-image/user-profile-image.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppLogoComponent,
    UserProfileImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AppLogoComponent,UserProfileImageComponent]
})
export class SharedModule { }
