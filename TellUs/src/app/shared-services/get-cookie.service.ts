import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetCookieService {

  constructor(private cookie: CookieService) { }

  getCookie() {
    return JSON.parse(this.cookie.get('user'));
  }
}
