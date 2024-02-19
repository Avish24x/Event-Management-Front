import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  private router = inject(Router);

  constructor(private fb: FormBuilder,
    private apiService : ApiService,
   private authService : AuthService,
    ) {
    this.loginForm = this.fb.group({
      username: [],//[Validators.required, Validators.email]
      password: ['', [Validators.required, Validators.minLength(8), containsSpecialCharacter]]
    });

    this.otpForm = this.fb.group({
      otp: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Form: ', this.loginForm?.value);
      this.apiService
      .request('login', 'post', this.loginForm?.value)
      .subscribe((result : {[key: string]:any}) => {
        console.log("login result: ", result);
       // this.authService.login(result);
       if(result['status'] === "Success"){
        this.router.navigate(['/events']);
       }
      })
    } else {
      console.log('Form has validation errors');
      this.loginForm.get('password')?.markAsTouched();
    }
  }

  verifyOTP() {
    console.log('OTP verification successful!');
  }
}
