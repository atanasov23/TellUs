import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public changeProfileImage: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient, private cookie: GetCookieService) { }

  username: string = '';

  getUserProfileImage() {

    if (this.cookie.getCookie('user')) {

      this.username = this.cookie.getCookie('user').username;

    }

    return this.http.get(`http://localhost:3000/getImage/${this.username}`);
  }

  getUserData() {

    if (this.cookie.getCookie('user')) {

      this.username = this.cookie.getCookie('user').username;

    }

    return this.http.get(`http://localhost:3000/${this.username}`);
  }

  imageAdd(form: any){

    return this.http.post(`http://localhost:3000/add/${form.userId}`, form.formData);

  }

  updateUserData(inputData: any) {

    return this.http.post(`http://localhost:3000/user/edit/${this.cookie.getCookie('user')._id}`, inputData);
  }

  updateUserImage(data: any) {

    return this.http.post(`http://localhost:3000/edit/${data.userId}`, data.formData);
  }

  deleteUserImage(userId: any, imageName: any) {

    return this.http.post(`http://localhost:3000/delete`, {
      userId,
      imageName: imageName.profileImage
    });

  }




}