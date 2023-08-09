import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCookieService } from 'src/app/services/get-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private cookie: GetCookieService) { }

  publication(inputData: any, formData: any) {

    const userData = this.cookie.getCookie('user');

    const params = new HttpParams()
      .append("inputData", inputData.description)
      .append("username", userData._id)
      .append("profileImage", userData.profileImage)
      .append("followers", userData.followers)
    return this.http.post<any>(`http://localhost:3000/adding`, formData, { params });
  }

  search(text: string){

    return this.http.get(`http://localhost:3000/search/${text}`);

  }

  getMyPublications(username: any) {

    return this.http.get(`http://localhost:3000/myPublications/${username}`);
  }

  getPostById(postId: any) {
    return this.http.get(`http://localhost:3000/getPostById/${postId}`);
  }

  deletePost(postId: any) {
    const userData = this.cookie.getCookie('user');
    return this.http.delete(`http://localhost:3000/deletePost/${postId}/${userData._id}`, {});
  }

  editPost(postId: any, data: any) {
    return this.http.post(`http://localhost:3000/editPost/${postId}`, { data });
  }

  getAllPost() {
    return this.http.get(`http://localhost:3000/allPosts`);
  }

  getImage(){

    return this.http.get(`http://localhost:3000/getImage`);
  }

  getVideo(){

    return this.http.get(`http://localhost:3000/getVideo`);
  }

  like(postId: any) {
    return this.http.post(`http://localhost:3000/like/${postId}`, {});
  }

  disLike(postId: any){
    return this.http.post(`http://localhost:3000/disLike/${postId}`, {});
  }

  coment(data: any){

    return this.http.post(`http://localhost:3000/coment`, data);
  }
}
