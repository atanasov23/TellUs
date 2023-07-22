import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserPublicationsViewComponent } from './components/user-publications-view/user-publications-view.component';
import { EditComponent } from './components/edit/edit.component';


const profileRoutes: Routes = [{
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