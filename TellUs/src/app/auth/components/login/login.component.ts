import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/userAuth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  token: object = {};
  userData = {};

  constructor(private router: Router, private login: UserAuthService, private cookieService: CookieService, private authService: AuthService) { }

  onSubmit(event: any) {
    this.userData = event.value;

    this.login.userLogin(this.userData).subscribe(res => {
      this.token = res;

      this.cookieService.set('token', String(this.token));
      //TODO

      this.authService.isUserLoggedIn.next(true);
      this.router.navigateByUrl('/')
    }, err => {
      this.errorMessage = err.error.message;
    });

  }
}
