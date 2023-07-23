import { Component } from '@angular/core';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent {

  constructor() { }

  formData: any = undefined;

  errorMessage = '';

  getImage(imageInput: any) {

    const file: File = imageInput.files[0];

    const form = new FormData();

    form.append('file', file);

    this.formData = form;

  }

  adding(event: any) {

    if(event.value.description.length < 5 || event.value.description.length === ''){

      this.errorMessage = 'Описанието е твърде кратко! Минимален брой символи 5.';

      setTimeout(() => { this.errorMessage = '' }, 3000);

      return;

    } else {

      console.log(200);
      
    }


  }
}
