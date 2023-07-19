import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  token: object = {};
  userData = {};

  constructor(private router: Router, private login: AuthService, private cookieService: CookieService) { }

  onSubmit(event: any) {
    this.userData = event.value;

    this.login.userLogin(this.userData).subscribe(res => {
      this.token = res;

      console.log(jwt_decode(String(this.token)));
      
      this.cookieService.set('token', String(this.token));
      //TODO
      this.router.navigateByUrl('/')
    }, err => {
      this.errorMessage = err.error.message;
    });

  }
}
