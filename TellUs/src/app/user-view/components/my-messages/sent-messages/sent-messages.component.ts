import { Component } from '@angular/core';
import { GetCookieService } from 'src/app/services/get-cookie.service';
import { UserDataService } from 'src/app/user-view/services/user-data.service';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent {

  constructor(private cookie: GetCookieService, private userService: UserDataService){}

  mySentMessages: any = [];

  ngOnInit(){

    this.userService.getSentMessages(this.cookie.getCookie('user')._id).subscribe(res => this.mySentMessages = res);
    
  }

  deleteMsg(msg: any){

    this.userService.deleteSentMessage(msg, this.cookie.getCookie('user')._id).subscribe(res => {

     this.mySentMessages = res;

    });
    
  }
}
