import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class UserAuthService {

  constructor(private http: HttpClient) { }

  userRegister(userData: any) {

    return this.http.post('http://localhost:3000/register', userData);

  }

  userLogin(userData: any) {

    return this.http.post('http://localhost:3000/login', userData);
  }

}
