import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAllUser() {
    return this.http.get('https://localhost:44353/Login');
  }
}
