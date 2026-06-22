import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Car {

  private apiUrl = 'https://6a1d9995bcc4f20d5ca4dcf7.mockapi.io/cars';

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(this.apiUrl);
  }
}