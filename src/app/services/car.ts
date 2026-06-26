import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Car {

  readonly API_URL:string = 'https://6a1d9995bcc4f20d5ca4dcf7.mockapi.io/cars'
  readonly http = inject(HttpClient)

  getCars():Observable<any>{
    return this.http.get<any>(this.API_URL)
  }

 getCarById(id:string):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/${id}`)
  }
}