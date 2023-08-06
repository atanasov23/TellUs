import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-user-followed',
  templateUrl: './user-followed.component.html',
  styleUrls: ['./user-followed.component.css']
})
export class UserFollowedComponent {

  logUser: any = this.cookie.getCookie('user');
  followed: any = [];
  id: any = '';
  
  constructor(private route: ActivatedRoute, private userService: UserDataService, private cookie: GetCookieService) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
  
      this.userService.getFollowed(this.id).subscribe(res => {

        this.followed = res;

      })

  }
}
