import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private apiUrl = 'http://localhost:3000/api/career'; // Update with your API URL

  constructor(private http: HttpClient) { }

  applyForJob(applicationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply`, applicationData);
  }
}