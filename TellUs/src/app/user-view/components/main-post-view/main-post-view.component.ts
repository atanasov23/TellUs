import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-main-post-view',
  templateUrl: './main-post-view.component.html',
  styleUrls: ['./main-post-view.component.css']
})
export class MainPostViewComponent {

  AllPublications: any = [];

  constructor(private pubService: PublicationService) { }

  ngOnInit() {

    this.pubService.getAllPost().subscribe(res => this.AllPublications = res);

  }
}
