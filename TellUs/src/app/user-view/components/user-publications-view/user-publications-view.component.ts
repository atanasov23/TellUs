import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { GetCookieService } from 'src/app/services/get-cookie.service';

@Component({
  selector: 'app-user-publications-view',
  templateUrl: './user-publications-view.component.html',
  styleUrls: ['./user-publications-view.component.css']
})
export class UserPublicationsViewComponent {

  myPublications: any = [];

  userData: any = this.cookie.getCookie('user');

  constructor(private pubService: PublicationService, private cookie: GetCookieService) { }

  ngOnInit() {
    
    this.pubService.getMyPublications(this.userData.username).subscribe(res => this.myPublications = res);

  }

}
