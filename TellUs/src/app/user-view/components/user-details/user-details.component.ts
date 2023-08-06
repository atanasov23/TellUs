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
  follower: boolean = false;
  userPublication: any = '';
  logUser: any = this.cookie.getCookie('user');

  constructor(private router: Router, private userService: UserDataService, private pubService: PublicationService, private route: ActivatedRoute, private cookie: GetCookieService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getUser(this.id).subscribe(res => {

      this.userData = res;

      this.router.navigateByUrl(`/user/${this.userData._id}/publication/${this.userData._id}`);

      if (this.userData.followers.includes(this.cookie.getCookie('user')._id)) {

        this.follower = true;

      }

      this.pubService.getMyPublications(this.userData.username).subscribe(res => {

        this.userPublication = res;

      })
    });

  }

  follow() {

    if (!this.follower) {
      this.follower = true;

      this.userService.follow(this.cookie.getCookie('user')._id, this.userData._id,).subscribe(res => { });

    }
  }

  unFollow() {

    if (this.follower) {

      this.follower = false;

      this.userService.unFollow(this.cookie.getCookie('user')._id, this.userData._id).subscribe(res => { });

    }
  }
}
