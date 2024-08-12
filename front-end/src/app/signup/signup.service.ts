import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signupUrl = 'http://localhost:3000/api/signup'; // Replace with your backend API URL


  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post<any>(this.signupUrl, user);
  }
}