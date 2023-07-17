import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTestComponent } from './view-test/view-test.component';
import { MainViewTestComponent } from './components/main-view-test/main-view-test.component';



@NgModule({
  declarations: [
    ViewTestComponent,
    MainViewTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserViewModule { }
