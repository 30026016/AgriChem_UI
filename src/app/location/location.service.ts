import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  saveLocation(locationData){
    return this.http.post('https://localhost:44353/Location', locationData);
  }

  // tslint:disable-next-line: typedef
  updateLocation(locationData){
    return this.http.put('https://localhost:44353/Location', locationData);
  }

  // tslint:disable-next-line: typedef
  getAllLocation(){
    return this.http.get('https://localhost:44353/Location');
  }

  // tslint:disable-next-line: typedef
  getLocationById(locationId){
    return this.http.get('https://localhost:44353/Location/' + locationId, );
  }

  // tslint:disable-next-line: typedef
  deleteLocation(locationId){
    return this.http.delete('https://localhost:44353/Location/' + locationId, );
  }
}
