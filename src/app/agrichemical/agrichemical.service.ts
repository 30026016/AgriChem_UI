import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgrichemicalService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveAgrichemical(agrichemicalData){
    return this.http.post('https://localhost:44353/AgriChemical', agrichemicalData);
  }

  // tslint:disable-next-line: typedef
  updateAgrichemical(agrichemicalData){
    return this.http.put('https://localhost:44353/AgriChemical', agrichemicalData);
  }

  // tslint:disable-next-line: typedef
  getAllAgrichemical(){
    return this.http.get('https://localhost:44353/AgriChemical');
  }

  // tslint:disable-next-line: typedef
  getAgrichemicalById(agrichemicalId){
    return this.http.get('https://localhost:44353/AgriChemical/' + agrichemicalId, );
  }

  // tslint:disable-next-line: typedef
  deleteAgrichemical(agrichemicalId){
    return this.http.delete('https://localhost:44353/AgriChemical/' + agrichemicalId, );
  }
}
