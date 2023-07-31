import { Component } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){}

  notificationResponse: any = '';

  socket = io('http://localhost:1000');

  ngOnInit(){

    /* this.socket.emit('conn', []); */

    /* setInterval(() => {this.socket = io('http://localhost:1000')},10000) */

    this.socket.on('conn', (res) => {
      this.notificationResponse = res;  
    })
  }
}
