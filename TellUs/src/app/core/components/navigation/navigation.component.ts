import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared-services/authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {

  loggedInUser: boolean = this.authUser.isLoggedIn();

  constructor(private authUser: AuthService, private route: Router, private cookieService: CookieService, private behaviorSubject: UserDataService) {

   this.authUser.isUserLoggedIn.subscribe(value => {
      this.loggedInUser = value;
    });

  }

  logout(){
    this.authUser.isUserLoggedIn.next(false);
    this.behaviorSubject.changeProfileImage.next('');
    this.cookieService.delete('token');
    this.cookieService.delete('user');
    this.cookieService.delete('image');
    this.route.navigateByUrl('');
  }

}
