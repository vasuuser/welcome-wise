import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  mobileNumber: string = '';
  dob: string = '';
  password: string = '';
  router: any;

  constructor(private signupService: SignupService) { }

  onSubmit() {
    // Handle signup logic here
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Mobile Number:', this.mobileNumber);
    console.log('Date of Birth:', this.dob);
    console.log('Password:', this.password);

    const user = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      dob: this.dob,
      mobileNumber: this.mobileNumber
    };

    // Make the api call.
    this.signupService.signup(user).subscribe(
      response => {
        console.log('Signup successful', response);
        // Handle success (e.g., redirect to login page)
        this.router.navigate(['/homepage']);
      },
      error => {
        console.error('Signup failed', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}