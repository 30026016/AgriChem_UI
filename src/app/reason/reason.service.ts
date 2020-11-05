import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveReason(reasonData){
    return this.http.post('https://localhost:44353/Reason', reasonData);
  }

  // tslint:disable-next-line: typedef
  updateReason(reasonData){
    return this.http.put('https://localhost:44353/Reason', reasonData);
  }

  // tslint:disable-next-line: typedef
  getAllReason(){
    return this.http.get('https://localhost:44353/Reason');
  }

  // tslint:disable-next-line: typedef
  getReasonById(reasonId){
    return this.http.get('https://localhost:44353/Reason/' + reasonId, );
  }

  // tslint:disable-next-line: typedef
  deleteReason(reasonId){
    return this.http.delete('https://localhost:44353/Reason/' + reasonId, );
  }
}
