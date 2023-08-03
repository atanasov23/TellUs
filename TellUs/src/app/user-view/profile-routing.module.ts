import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/own-profile/user-profile.component';
import { UserPublicationsViewComponent } from './components/own-publications-view/user-publications-view.component';
import { EditComponent } from './components/edit/edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NavigationComponent } from '../core/components/navigation/navigation.component';
import { UserPublicationComponent } from './components/user-details/user-publication/user-publication.component';


const profileRoutes: Routes = [{
    path: 'user/:id', component: UserDetailsComponent, children: [
      {
        path: 'publication/:id',
        component: UserPublicationComponent
      },
      {
        path: 'followers',
        component: NavigationComponent
      }
    ]
  },{
    path: 'profile', component: UserProfileComponent, children: [
        {
            path: 'publications',
            component: UserPublicationsViewComponent
        }, {
            path: 'edit',
            component: EditComponent
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }