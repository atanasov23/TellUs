import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {

  loggedInUser: boolean = false;

  constructor(private authUser: AuthService) { }

  ngOnInit() {
    this.loggedInUser = this.authUser.isLoggedIn();
  }
}
