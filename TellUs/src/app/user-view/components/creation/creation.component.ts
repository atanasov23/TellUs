import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { Router } from '@angular/router';
import { io } from "socket.io-client";
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  constructor(private http: HttpClient, private cookie: GetCookieService, private publicationService: PublicationService, private route: Router) { }

  /* socket = io('http://localhost:1000'); */

  formData: any = undefined;

  errorMessage: string = '';

  getImage(imageInput: any) {

    const file: File = imageInput.files[0];

    const form = new FormData();

    form.append('file', file);

    this.formData = form;

  }

  adding(event: any) {

    const inputData = event.value;

    if (event.value.description.length < 5 || event.value.description.length === '') {

      if (this.formData === undefined) {
        this.errorMessage = 'Добавете файл!';
        setTimeout(() => { this.errorMessage = '' }, 3000);
        return;
      }

      this.errorMessage = 'Описанието е твърде кратко! Минимален брой символи 5.';

      setTimeout(() => { this.errorMessage = '' }, 3000);

      return;

    } else {

      this.publicationService.publication(inputData, this.formData).subscribe(res => {

        this.errorMessage = res.message;

        const data = {
          post: res.data,
          user: this.cookie.getCookie('user')
        }

        this.http.post(`http://localhost:3000/addingNotification`, data).subscribe(res => res);

        setTimeout(() => {
          this.errorMessage = ''
          this.route.navigateByUrl('/');
        }, 2000);

      });
    }


  }
}
