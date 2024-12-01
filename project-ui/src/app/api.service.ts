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
  calculateProbability(userInput: any): Observable<any> {
    const payload = { userInput };
    return this.http.post<any>('/api/probability', payload);
}


  /**
   * Calls the API to calculate classification
   * @param userInput - The data to send to the backend
   * @returns Observable with the API response
   */
  calculateClassification(userInput: any): Observable<any> {
    // const endpoint = `${this.baseUrl}/api/classification`;
    // return this.http.post(endpoint, { userInput });
      const payload = { userInput };
      return this.http.post<any>('/api/classification', payload);
    }
  }
// }
