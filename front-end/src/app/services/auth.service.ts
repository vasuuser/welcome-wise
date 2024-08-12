import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  // Mock login method
  login(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Mock signup method
  signup(email: string, password: string): boolean {
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }
  
  public isAdmin(): boolean {
    const userRole = this.getCookie('userRole'); // Replace 'userRole' with the actual cookie name
    return userRole === 'admin';
  }
}