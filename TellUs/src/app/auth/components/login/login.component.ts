import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/userAuth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared-services/authentication.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';
import { io } from "socket.io-client";
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  token: any = {
    jwt: '',
    user: ''
  };
  userData = {};

  socket = io('http://localhost:1000');

  constructor(private cookie: GetCookieService, private router: Router, private login: UserAuthService, private cookieService: CookieService, private authService: AuthService, private behaviorSubject: UserDataService) { }

  onSubmit(event: any) {
    this.userData = event.value;

    this.login.userLogin(this.userData).subscribe(res => {
      this.token = res;

      this.cookieService.set('token', this.token.jwt);
      this.cookieService.set('user', JSON.stringify(this.token.user));
      this.cookieService.set('image', this.token.user.profileImage);

      this.authService.isUserLoggedIn.next(true);
      this.behaviorSubject.changeProfileImage.next(this.token.user.profileImage);

      this.router.navigateByUrl('/')
    }, err => {
      this.errorMessage = err.error.message;
      setTimeout( () => {
        this.errorMessage = ''
      }, 2000);
    });

  }
}
