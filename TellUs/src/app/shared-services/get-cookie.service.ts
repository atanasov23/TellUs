import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetCookieService {

  constructor(private cookie: CookieService) { }

  getCookie(cookie: string) {


    if (this.cookie.get(cookie)) {
      if (cookie === 'user') {
        return JSON.parse(this.cookie.get(cookie));
      } else {

        if (this.cookie.get('image') === '""') {
          return String(this.cookie.get(cookie)).replace('""', '');
        } else {
          return this.cookie.get('image');
        }
      }
    }

  }

  setCookie(value: any) {

    let oldCookie = JSON.parse(this.cookie.get('user'));

    oldCookie.profileImage = value;

    this.cookie.delete('user');

    this.cookie.set('user', JSON.stringify(oldCookie));

  }
}
