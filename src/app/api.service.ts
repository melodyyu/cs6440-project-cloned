import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  calculateProbability(userInput: any) {
    const response = this.http.post('/api/probability', userInput)
    return response
  }

  calculateClassification(userInput: any) {
    const response = this.http.post('/api/classification', userInput)
    return response
  }
}