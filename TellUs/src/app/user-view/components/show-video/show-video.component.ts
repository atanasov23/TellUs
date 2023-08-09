import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent {

  allVideo: any = [];
  
  
  constructor(private pubService: PublicationService) { }

  ngOnInit() {
    

    this.pubService.getVideo().subscribe(res => this.allVideo = res);

  }
}
