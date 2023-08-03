import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';

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
    myPublications: []
  }

  constructor(private userService: UserDataService, private router: Router) { }

  ngOnInit() {

    this.router.navigateByUrl('/profile/publications');

    this.userService.getUserData().subscribe(res => { this.userData = res });

  }
}
