import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetCookieService {

  constructor(private cookie: CookieService) { }

  getCookie() {

    if(this.cookie.get('user')){
      return JSON.parse(this.cookie.get('user'));
    }
    
  }
}
