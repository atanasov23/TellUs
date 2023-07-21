import { Component } from '@angular/core';
import { GetUserDataService } from 'src/app/user-view/services/get-user-data.service';

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.css']
})
export class UserProfileImageComponent {

  image: any = '';

  constructor(private profileImage: GetUserDataService) {
    this.profileImage.changeProfileImage.subscribe(value => {

      if (value) {
        this.image = value;
      }

    });
  }
}
