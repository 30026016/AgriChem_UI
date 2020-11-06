import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from './location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationForm: FormGroup;
  locationList;
  locationId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private locationService: LocationService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.locationForm = this.fb.group({
      locationName: ['']
    });
    this.GetLocation();
  }

  // tslint:disable-next-line: typedef
  OnSubmit() {
    if (this.locationId && this.locationId > 0) {
      const locationDataforUpdate = {
        locationId: this.locationId,
        locationName: this.locationForm.controls.locationName.value
      };

      this.locationService.updateLocation(locationDataforUpdate).subscribe(() => {
        this.btnSave = 'Save';
        this.GetLocation();
        this.locationForm.reset();
      });
    }
    else {
      this.locationService.saveLocation(this.locationForm.value).subscribe(data => {
        this.GetLocation();
        this.locationForm.reset();
      });
    }
    this.locationId = '';
    this.locationForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetLocation() {
    this.locationService.getAllLocation().subscribe(data => {
      this.locationList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editLocation(id) {
    this.locationService.getLocationById(id).subscribe((data: any) => {
      this.locationId = data.locationId;
      this.btnSave = 'Update';
      this.locationForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteLocation(id) {
    if (confirm('Are you sure you want to delete this record?')){
      this.locationService.deleteLocation(id).subscribe(data => {
        this.GetLocation();
      });
    }
  }

  // tslint:disable-next-line: typedef
  OnCancel() {
    this.locationId = '';
    this.locationForm.reset();
    this.btnSave = 'Save';
  }
}
