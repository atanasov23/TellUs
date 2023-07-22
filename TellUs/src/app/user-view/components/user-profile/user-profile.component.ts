import { Component } from '@angular/core';
import { GetUserDataService } from '../../services/get-user-data.service';
/* import { GetCookieService } from 'src/app/shared-services/get-cookie.service'; */

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  userData: any = {
    username: '',
    _id: '',
    email: '',
    followed: [],
    followers: [],
    publications: []
  }

  constructor(private userService: GetUserDataService) { }

  ngOnInit() {

    this.userService.getUserData().subscribe(res => { this.userData = res });

  }
}
