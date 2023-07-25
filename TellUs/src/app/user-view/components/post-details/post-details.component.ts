import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  constructor(private pubService: PublicationService, private cookie: GetCookieService, private router: Router, private route: ActivatedRoute) { }

  postId: any = this.route.snapshot.paramMap.get('id');

  showEditArea: boolean = false;

  resMessage: any = '';

  deletePost() {

    this.pubService.deletePost(this.postId).subscribe(res => { this.router.navigate(['profile']) });

  }

  showEditPost() {

    this.showEditArea = true;

  }

  editPost(event: any) {

    this.pubService.editPost(this.postId, event.value).subscribe(res => {

      this.resMessage = res;

      setTimeout(() => {

        this.resMessage = '';
        this.router.navigate([`p/${this.postId}`]);
        this.showEditArea = false;
      }, 2000);

    });

  }

}
