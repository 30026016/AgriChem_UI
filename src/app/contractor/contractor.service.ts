import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private http: HttpClient) { }

   // tslint:disable-next-line: typedef
   saveContractor(contractorData){
    return this.http.post('https://localhost:44353/Contractor', contractorData);
  }

  // tslint:disable-next-line: typedef
  updateContractor(contractorData){
    return this.http.put('https://localhost:44353/Contractor', contractorData);
  }

  // tslint:disable-next-line: typedef
  getAllContractor(){
    return this.http.get('https://localhost:44353/Contractor');
  }

  // tslint:disable-next-line: typedef
  getContractorById(contractorId){
    return this.http.get('https://localhost:44353/Contractor/' + contractorId, );
  }

  // tslint:disable-next-line: typedef
  deleteContractor(contractorId){
    return this.http.delete('https://localhost:44353/Contractor/' + contractorId, );
  }
}
