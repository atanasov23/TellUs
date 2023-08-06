import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/profile/user-profile.component';
import { EditComponent } from './components/edit/edit.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPublicationComponent } from './components/user-details/user-publication/user-publication.component';
import { UserFollowedComponent } from './components/user-details/user-followed/user-followed.component';
import { UserFollowersComponent } from './components/user-details/user-followers/user-followers.component';


const profileRoutes: Routes = [{
    path: 'user/:id', component: UserDetailsComponent, children: [
      {
        path: 'publication/:id',
        component: UserPublicationComponent
      },
      {
        path: 'followed/:id',
        component: UserFollowedComponent
      },
      {
        path: 'followers/:id',
        component: UserFollowersComponent
    }
    ]
  },{
    path: 'profile', component: UserProfileComponent, children: [
        {
            path: 'publications/:id',
            component: UserPublicationComponent
        }, {
            path: 'edit',
            component: EditComponent
        },
        {
          path: 'followed/:id',
          component: UserFollowedComponent
      },
      {
        path: 'followers/:id',
        component: UserFollowersComponent
    }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }