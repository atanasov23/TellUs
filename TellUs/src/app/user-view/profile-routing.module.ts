import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '../core/components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavigationComponent } from '../core/components/navigation/navigation.component';


const profileRoutes: Routes = [{
    path: 'profile', component: UserProfileComponent, children: [
        {
            path: 'edit',
            component: FooterComponent
        }, {
            path: 'nav',
            component: NavigationComponent
        }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }