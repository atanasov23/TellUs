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

  user: {_id: ''} = this.cookie.getCookie('user');

  userId: any = '';

  messageToUser: string = '';

  showEditArea: boolean = false;

  postDetails: any = '';

  resMessage: any = '';

  ngOnInit() {

    if (this.user) {
      this.userId = this.user._id;
    }

    this.pubService.getPostById(this.postId).subscribe(res => {

      this.postDetails = res;

    })

  }

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
        this.router.navigateByUrl(`p/${this.postId}`);
        this.showEditArea = false;
      }, 2000);

    });

  }

  like() {

   
    if (Object.keys(this.user).length) {

      
    } else {

      this.messageToUser = 'За да може да харесвате, трябва да се логнете в сайта.';

      setTimeout(() => { this.messageToUser = '' }, 2000)
    }

  }

  coment() {
    if (Object.keys(this.user).length) {

    } else {

      this.messageToUser = 'За да може да коментирате, трябва да се логнете в сайта.';

      setTimeout(() => { this.messageToUser = '' }, 2000)
    }
  }

  sendComent(event: any) {

    if (Object.keys(this.user).length) {
      console.log(event.value);
    } else {

      this.messageToUser = 'За да може да коментирате, трябва да се логнете в сайта.';

      setTimeout(() => { this.messageToUser = '' }, 2000);
    }
  }

}
