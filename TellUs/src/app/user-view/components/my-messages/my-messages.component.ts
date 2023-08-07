import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent {

  constructor(private route: Router){}

  ngOnInit(){

    this.route.navigate(['/myMessages/sentMessages']);
  }
}
