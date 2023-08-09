import { Component } from '@angular/core';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-messages-received',
  templateUrl: './messages-received.component.html',
  styleUrls: ['./messages-received.component.css']
})
export class MessagesReceivedComponent {

  constructor(private cookie: GetCookieService, private userService: UserDataService) { }

  myReceivedMessages: any = [];

  ngOnInit() {

    this.userService.getReceivedMessage(this.cookie.getCookie('user')._id).subscribe(res => this.myReceivedMessages = res);

  }

  answerToMessage(form: any, msg: any) {

    
    const answer = { sender: msg.receiver, receiver: msg.sender, msg: form.value.answer }

    this.userService.answerToMessage(answer).subscribe(res => this.myReceivedMessages = res);

  }

  deleteMsg(msg: any){

    this.userService.deleteReceivedMessage(msg, this.cookie.getCookie('user')._id).subscribe(res => {

     this.myReceivedMessages = res;

    });
    
  }
}
