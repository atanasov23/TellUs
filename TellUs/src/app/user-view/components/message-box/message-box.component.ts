import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {

  constructor(private cookieService: GetCookieService, private route: ActivatedRoute, private userService: UserDataService) { }

  message: string = '';

  sendMessage(event: any) {

    const msg = event.value.msg;

    const receiver = this.route.snapshot.paramMap.get('id');

    const msgData = {
      sender: this.cookieService.getCookie('user')._id,
      receiver,
      msg
    }

    this.userService.sendMessage(msgData).subscribe(res => {

      this.message = 'Съобщението е изпратено.';

      setTimeout(() => {

        this.message = '';
      }, 2000)
    });
  }

}
