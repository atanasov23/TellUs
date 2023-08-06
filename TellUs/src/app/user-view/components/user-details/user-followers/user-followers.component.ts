import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent {

  logUser: any = this.cookie.getCookie('user');
  followers: any = [];
  id:any = '';
  
  constructor(private route: ActivatedRoute, private userService: UserDataService, private cookie: GetCookieService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
  
      this.userService.getFollowers(this.id).subscribe(res => {

        this.followers = res;

      })

  }
}
