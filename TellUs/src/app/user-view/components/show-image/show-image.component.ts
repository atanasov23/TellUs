import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent {

  allImage: any = [];
  
  
  constructor(private pubService: PublicationService) { }

  ngOnInit() {
    

    this.pubService.getImage().subscribe(res => this.allImage = res);

  }
}
