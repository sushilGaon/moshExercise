import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceForInterceptor {

  constructor(private http:HttpClient) {
    
  }

  fetch(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}
