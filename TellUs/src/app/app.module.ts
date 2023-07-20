import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { UserViewModule } from './user-view/user-view.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    UserViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
