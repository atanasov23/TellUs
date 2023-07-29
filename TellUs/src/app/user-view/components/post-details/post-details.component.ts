import { Component } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { GetCookieService } from 'src/app/shared-services/get-cookie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  constructor(private pubService: PublicationService, private cookie: GetCookieService, private router: Router, private route: ActivatedRoute) { }

  postId: any = this.route.snapshot.paramMap.get('id');

  user: { _id: '', profileImage: '' } = this.cookie.getCookie('user');

  userId: any = '';

  messageToUser: string = '';

  showEditArea: boolean = false;

  postDetails: any = '';

  resMessage: any = {
    message: '',
  };

  behaviorSubjectLike = new BehaviorSubject(this.postDetails.likes);

  behaviorSubjectDisLike = new BehaviorSubject(this.postDetails.likes);

  behaviorSubjectComents = new BehaviorSubject(this.postDetails.comments);

  behaviorSubjectEdit = new BehaviorSubject(this.postDetails.description);

  ngOnInit() {

    if (this.user) {
      this.userId = this.user._id;
    }

    this.pubService.getPostById(this.postId).subscribe(res => {

      this.postDetails = res;

      this.behaviorSubjectLike.next(this.postDetails.likes);

      this.behaviorSubjectDisLike.next(this.postDetails.disLikes);

      this.behaviorSubjectComents.next(this.postDetails.comments);

      this.behaviorSubjectEdit.next(this.postDetails.description);

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

      this.behaviorSubjectEdit.next(event.value.editText);

      setTimeout(() => {

        this.resMessage = '';
        this.router.navigateByUrl(`p/${this.postId}`);
        this.showEditArea = false;
      }, 2000);

    });

  }

  like() {

    if (Object.keys(this.user).length) {

      this.pubService.like(this.postDetails._id).subscribe(res => { });

      let oldValue = this.behaviorSubjectLike.getValue();

      oldValue++;

      this.behaviorSubjectLike.next(oldValue);


    } else {

      this.messageToUser = 'Трябва да се логнете в сайта.';

      setTimeout(() => { this.messageToUser = '' }, 2000)
    }

  }

  disLike() {

    if (Object.keys(this.user).length) {

      this.pubService.disLike(this.postDetails._id).subscribe(res => { });

      let oldValue = this.behaviorSubjectDisLike.getValue();

      oldValue++;

      this.behaviorSubjectDisLike.next(oldValue);


    } else {

      this.messageToUser = 'Трябва да се логнете в сайта.';

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

    const comentValue = event.value;

    if (Object.keys(this.user).length) {

      const dataObj = {
        coment: comentValue.coment,
        user: this.user._id,
        userImage: this.user.profileImage,
        postId: this.postDetails._id
      }

      this.pubService.coment(dataObj).subscribe(res => {

        this.behaviorSubjectComents.next(res);

      });

    } else {

      this.messageToUser = 'За да може да коментирате, трябва да се логнете в сайта.';

      setTimeout(() => { this.messageToUser = '' }, 2000);
    }
  }

}
