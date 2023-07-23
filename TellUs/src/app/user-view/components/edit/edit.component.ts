import { Component } from '@angular/core';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';
import { UserDataService } from '../../services/user-data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  userNewImage: any = {
    formData: '',
    userId: ''
  };

  responseMessageForImage: any = {
    message: '',
    image: ''
  };

  responseMessageForUserData: any = {
    message: '',
    image: ''
  };

  havePic: any = JSON.parse(this.cookieService.get('user')).profileImage;

  constructor(private cookie: GetCookieService, private dataService: UserDataService, private cookieService: CookieService) { }

  editProfile(form: any) {

    const formData = form.value;

    this.dataService.updateUserData(formData).subscribe(res => {

      this.responseMessageForUserData = res

      setTimeout(() => { this.responseMessageForUserData.message = '' }, 3000);
    });
  }

  imageAdd() {

    this.dataService.imageAdd(this.userNewImage).subscribe(res => {

      this.dataService.changeProfileImage.next(this.userNewImage.formData.get('image').name);

      this.responseMessageForImage = res;

      this.havePic = this.userNewImage.formData.get('image').name;

      this.cookie.setCookie(this.userNewImage.formData.get('image').name);

      setTimeout(() => { this.responseMessageForImage.message = '' }, 3000);
    });
  }


  imageUpdate() {

    this.dataService.updateUserImage(this.userNewImage).subscribe(res => {

      this.dataService.changeProfileImage.next(this.userNewImage.formData.get('image').name);

      this.responseMessageForImage = res;

      this.havePic = this.userNewImage.formData.get('image').name;

      this.cookie.setCookie(this.userNewImage.formData.get('image').name);

      setTimeout(() => { this.responseMessageForImage.message = '' }, 3000);

    });
  }

  imageDelete() {

    this.dataService.deleteUserImage(this.cookie.getCookie('user')._id, this.cookie.getCookie('user')).subscribe(res => {

      this.responseMessageForImage = res;

      this.cookie.setCookie('');

      this.havePic = '';

      this.dataService.changeProfileImage.next('');

      setTimeout(() => { this.responseMessageForImage.message = '' }, 3000);
    });
  }

  getImage(image: any) {

    const formData = new FormData();

    const file: File = image.files[0];

    const userId: string = this.cookie.getCookie('user')._id;

    formData.append('image', file);

    this.userNewImage = {
      formData,
      userId
    }


  }
}
