import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), containsSpecialCharacter]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
    } else {
      console.log('Form has validation errors');
    }
  }
}
