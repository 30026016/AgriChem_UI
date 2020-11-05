import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegionService } from './region.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regionForm: FormGroup;
  regionList;
  regionId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private regionService: RegionService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.regionForm = this.fb.group({
      regionName : ['']
    });
    this.GetRegion();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.regionId && this.regionId > 0)
    {
      const regionDataforUpdate = {
        regionId: this.regionId ,
        regionName: this.regionForm.controls.regionName.value };

      this.regionService.updateRegion(regionDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetRegion();
          this.regionForm.reset();
        });
    }
    else {
      this.regionService.saveRegion(this.regionForm.value).subscribe(data => {
        this.GetRegion();
        this.regionForm.reset();
      });
    }
    this.regionId = '';
    this.regionForm.reset();
  }

  // getAll Region
  // tslint:disable-next-line: typedef
  GetRegion(){
    this.regionService.getAllRegion().subscribe(data => {
      this.regionList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editRegion(id){
    this.regionService.getRegionById(id).subscribe((data: any) => {
      this.regionId = data.regionId;
      this.btnSave = 'Update';
      this.regionForm.patchValue(data);
    });

  }

  // tslint:disable-next-line: typedef
  deleteRegion(id){
    this.regionService.deleteRegion(id).subscribe(data => {
      this.GetRegion();
    });
  }

  // tslint:disable-next-line: typedef
  OnCancel(){
    this.regionId = '';
    this.regionForm.reset();
    this.btnSave = 'Save';
  }
}
