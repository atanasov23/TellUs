import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { PublicationService } from 'src/app/user-view/services/publication.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-user-publication',
  templateUrl: './user-publication.component.html',
  styleUrls: ['./user-publication.component.css']
})
export class UserPublicationComponent {

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
