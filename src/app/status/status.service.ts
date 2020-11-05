import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  saveStatus(statusData){
    return this.http.post('https://localhost:44353/Status', statusData);
  }

  // tslint:disable-next-line: typedef
  updateStatus(statusData){
    return this.http.put('https://localhost:44353/Status', statusData);
  }

  // tslint:disable-next-line: typedef
  getAllStatus(){
    return this.http.get('https://localhost:44353/Status');
  }

  // tslint:disable-next-line: typedef
  getStatusById(statusId){
    return this.http.get('https://localhost:44353/Status/' + statusId, );
  }

  // tslint:disable-next-line: typedef
  deleteStatus(statusId){
    return this.http.delete('https://localhost:44353/Status/' + statusId, );
  }
}