import { Component } from '@angular/core';
import { InputValidationService } from '../../services/register-input-validation.service';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage = '';
  userData = {};

  constructor(private inputValidation: InputValidationService, private register: RegisterService, private router: Router) { }

  onSubmit(event: any) {
    this.userData = event.value

    if (this.inputValidation.dataVerification(this.userData) === 'true') {

      this.register.userRegister(this.userData);

      this.router.navigateByUrl('/');

    } else {

      this.errorMessage = String(this.inputValidation.dataVerification(this.userData));

    }

  }
}
