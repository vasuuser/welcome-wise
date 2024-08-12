import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    // Handle login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    const credentials = {
      email: this.email,
      password: this.password
    };

    // Make the api call.
    this.loginService.login(credentials).subscribe(
      response => {
        console.log('Login successful', response);
        // Handle success (e.g., redirect to homepage or dashboard)
        this.router.navigate(['/home']);      
      },
      error => {
        console.error('Login failed', error);
        // Handle error (e.g., show error message)
        // alert("Invalid credentials. So login failed");
      }
    );
  }
}
