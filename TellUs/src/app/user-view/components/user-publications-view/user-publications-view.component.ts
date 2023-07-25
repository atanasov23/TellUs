import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-publications-view',
  templateUrl: './user-publications-view.component.html',
  styleUrls: ['./user-publications-view.component.css']
})
export class UserPublicationsViewComponent {

  myPublications: any = [];

  constructor(private pubService: PublicationService) { }

  ngOnInit() {

    this.pubService.getMyPublications().subscribe(res => this.myPublications = res);

  }

}
