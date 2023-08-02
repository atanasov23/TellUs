import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../../services/userAuth.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/authentication.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { WorkerService } from 'src/app/services/worker.service';
import { workers } from '../../../webWorkers/workers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage = '';
  token: any = {
    jwt: '',
    user: ''
  };
  userData = {};

  constructor(private cookie: GetCookieService, private router: Router, private login: UserAuthService, private cookieService: CookieService, private authService: AuthService, private behaviorSubject: UserDataService, private notificationService: WorkerService) { }

  onSubmit(event: any) {
    this.userData = event.value;

    this.login.userLogin(this.userData).subscribe(res => {
      this.token = res;

      this.cookieService.set('token', this.token.jwt);
      this.cookieService.set('user', JSON.stringify(this.token.user));
      this.cookieService.set('image', this.token.user.profileImage);

      this.authService.isUserLoggedIn.next(true);
      this.behaviorSubject.changeProfileImage.next(this.token.user.profileImage);

      if (typeof Worker !== 'undefined') {

        console.log(20);
        

        const worker = workers.notificationWorker;
        worker.onmessage = ( res ) => {

          console.log(res.data);
          
          this.notificationService.notificationData.next(res.data);
        };

        worker.postMessage(this.cookie.getCookie('user')._id);
      } else {
        console.log(30);
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
      }

      this.router.navigateByUrl('/')
    }, err => {
      this.errorMessage = err.error.message;
      setTimeout(() => {
        this.errorMessage = ''
      }, 2000);
    });

  }
}
