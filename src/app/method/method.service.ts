import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

  constructor(private http: HttpClient) { }

  saveMethod(methodData){
    return this.http.post('https://localhost:44353/Method', methodData);
  }

  // tslint:disable-next-line: typedef
  updateMethod(methodData){
    return this.http.put('https://localhost:44353/Method', methodData);
  }

  // tslint:disable-next-line: typedef
  getAllMethod(){
    return this.http.get('https://localhost:44353/Method');
  }

  // tslint:disable-next-line: typedef
  getMethodById(methodId){
    return this.http.get('https://localhost:44353/Method/' + methodId, );
  }

  // tslint:disable-next-line: typedef
  deleteMethod(methodId){
    return this.http.delete('https://localhost:44353/Method/' + methodId, );
  }
}