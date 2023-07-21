import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();

  constructor(private cookieService: CookieService) { }

  isLoggedIn() {

    const token = this.cookieService.get('token');

    return !this.helper.isTokenExpired(token);

  }

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn());
}
