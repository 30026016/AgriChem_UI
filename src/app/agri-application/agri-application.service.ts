import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgriApplicationService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveAgriChem(agriChemData){
    return this.http.post('https://localhost:44353/AgriChemicalApplication', agriChemData);
  }

  // tslint:disable-next-line: typedef
  getAllAgriApplication(){
    return this.http.get('https://localhost:44353/AgriChemicalApplication');
  }

  // tslint:disable-next-line: typedef
  getAllAgriApplicationById(Id){
    return this.http.get('https://localhost:44353/AgriChemicalApplication/' + Id, );
  }
}
