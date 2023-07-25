import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private cookie: GetCookieService) { }

  userData: any = this.cookie.getCookie('user');

  publication(inputData: any, formData: any) {

    const params = new HttpParams()
      .append("inputData", inputData.description)
      .append("username", this.userData.username);
    return this.http.post<any>(`http://localhost:3000/adding`, formData, { params });
  }

  getMyPublications() {
    return this.http.get(`http://localhost:3000/myPublications/${this.userData.username}`);
  }

  deletePost(postId: any) {
    return this.http.delete(`http://localhost:3000/deletePost/${postId}/${this.userData._id}`, {});
  }

  editPost(postId: any, data: any) {
    return this.http.post(`http://localhost:3000/editPost/${postId}`, { data });
  }
}
