import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  saveRegion(regionData){
    return this.http.post('https://localhost:44353/Region', regionData);
  }

  // tslint:disable-next-line: typedef
  updateRegion(regionData){
    return this.http.put('https://localhost:44353/Region', regionData);
  }

  // tslint:disable-next-line: typedef
  getAllRegion(){
    return this.http.get('https://localhost:44353/Region');
  }

  // tslint:disable-next-line: typedef
  getRegionById(regionId){
    return this.http.get('https://localhost:44353/Region/' + regionId, );
  }

  // tslint:disable-next-line: typedef
  deleteRegion(regionId){
    return this.http.delete('https://localhost:44353/Region/' + regionId, );
  }
}
