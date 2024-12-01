// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor(private http: HttpClient) { }

//   calculateProbability(userInput: any) {
//     const response = this.http.post('/api/probability', userInput)
//     return response
//   }

//   calculateClassification(userInput: any) {
//     const response = this.http.post('/api/classification', userInput)
//     return response
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://cs6440-project-cloned.onrender.com'; // Ensure this is your backend URL

  constructor(private http: HttpClient) { }

  /**
   * Calls the API to calculate probability
   * @param userInput - The data to send to the backend
   * @returns Observable with the API response
   */
  calculateProbability(userInput: any) {
    console.log('Making request to:', `${this.baseUrl}/api/probability`);
    return this.http.post(`${this.baseUrl}/api/probability`, userInput).pipe(
      catchError((error) => {
        console.error('Error in Probability API:', error);
        return throwError(error);
      })
    );
  }

  calculateClassification(userInput: any) {
    console.log('Making request to:', `${this.baseUrl}/api/classification`);
    return this.http.post(`${this.baseUrl}/api/classification`, userInput).pipe(
      catchError((error) => {
        console.error('Error in Classification API:', error);
        return throwError(error);
      })
    );
  }
}
