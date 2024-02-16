import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from 'src/app/services/auth.service';

declare var $: any;

// Custom validator function
export function containsSpecialCharacter(control: AbstractControl): { [key: string]: boolean } | null {
  // Add your desired special characters to the regular expression
  const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

  if (!specialCharacterRegex.test(control.value)) {
    return { 'specialCharacter': true };
  }

  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  otpForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiService : ApiService,
    private authService : AuthService,
    ) {
    this.loginForm = this.fb.group({
      username: [''],//[Validators.required, Validators.email]
      password: ['', [Validators.required, Validators.minLength(8), containsSpecialCharacter]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Open OTP modal when login form is submitted
      $('#otpModal').modal('show');
    } else {
      console.log('Form has validation errors');
      this.loginForm.get('password')?.markAsTouched();
    }
  }

  verifyOTP() {
    if (this.otpForm.valid) {
      console.log('OTP verification successful!');
      // Close OTP modal after OTP verification
      $('#otpModal').modal('hide');
      // Proceed with login or further actions
    } else {
      console.log('OTP form has validation errors');
    }
  }
}
