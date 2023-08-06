import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GetCookieService } from 'src/app/services/get-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public changeProfileImage: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient, private cookie: GetCookieService, private route: Router) { }

  username: string = '';

  getFollowed(id: any) {

    return this.http.get(`http://localhost:3000/getFollowed/${id}`);

  }

  getFollowers(id: any) {

    return this.http.get(`http://localhost:3000/getFollowers/${id}`);

  }

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

  getUser(id: any){
    
    return this.http.get(`http://localhost:3000/getUser/${id}`);

  }

  imageAdd(form: any){

    return this.http.post(`http://localhost:3000/add/${form.userId}`, form.formData);

  }

  updateUserData(inputData: any) {

    setTimeout(() => {
      this.route.navigateByUrl('login');
    }, 2000);

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


  follow(logUserId: any, postOwnerId: any){

    return this.http.post(`http://localhost:3000/follow`, {logUserId, postOwnerId});
  }

  unFollow(logUserId: any, postOwnerId: any){

    return this.http.post(`http://localhost:3000/unFollow`, {logUserId, postOwnerId});

  }

}
