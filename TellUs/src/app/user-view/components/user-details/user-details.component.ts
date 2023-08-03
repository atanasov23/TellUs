import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from '../../services/publication.service';
import { GetCookieService } from 'src/app/services/get-cookie.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userData: any = {
    username: '',
    _id: '',
    email: '',
    followed: [],
    followers: [],
    myPublications: [],
    profileImage: ''

  }

  id: any = '';
  userPublication: any = '';
  logUser: any = this.cookie.getCookie('user');

  constructor(private userService: UserDataService, private pubService: PublicationService, private route: ActivatedRoute, private cookie: GetCookieService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(this.id).subscribe(res => {

      this.userData = res;

      this.pubService.getMyPublications(this.userData.username).subscribe(res => {

        this.userPublication = res;

      })
    });

  }
}
