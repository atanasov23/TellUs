import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  public changeProfileImage: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient, private cookie: GetCookieService) { }

  username: string = '';

  getUserProfileImage() {

    if (this.cookie.getCookie()) {

      this.username = this.cookie.getCookie().username;

    }

    return this.http.get(`http://localhost:3000/getImage/${this.username}`);
  }

}
