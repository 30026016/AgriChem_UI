import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractmanagerService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveCManager(cManagerData){
    return this.http.post('https://localhost:44353/ContractManager', cManagerData);
  }

  // tslint:disable-next-line: typedef
  updateCManager(cManagerData){
    return this.http.put('https://localhost:44353/ContractManager', cManagerData);
  }

  // tslint:disable-next-line: typedef
  getAllCManager(){
    return this.http.get('https://localhost:44353/ContractManager');
  }

  // tslint:disable-next-line: typedef
  getCManagerById(cManagerId){
    return this.http.get('https://localhost:44353/ContractManager/' + cManagerId, );
  }

  // tslint:disable-next-line: typedef
  deleteCManager(cManagerId){
    return this.http.delete('https://localhost:44353/ContractManager/' + cManagerId, );
  }
}
