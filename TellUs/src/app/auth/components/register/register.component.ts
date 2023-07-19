import { Component } from '@angular/core';
import { InputValidationService } from '../../services/register-input-validation.service';
import { UserAuthService } from '../../services/userAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage: string = '';
  userData = {};

  constructor(private inputValidation: InputValidationService, private register: UserAuthService, private router: Router) { }

  onSubmit(event: any) {
    this.userData = event.value

    if (this.inputValidation.dataVerification(this.userData) === 'true') {

      this.register.userRegister(this.userData).subscribe(res => {
      
        this.router.navigateByUrl('/login');
      }, err => {
        this.errorMessage = err.error.message;
      });

    } else {

      this.errorMessage = String(this.inputValidation.dataVerification(this.userData));

    }

  }
}
