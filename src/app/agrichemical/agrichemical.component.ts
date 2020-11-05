import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgrichemicalService } from './agrichemical.service';

@Component({
  selector: 'app-agrichemical',
  templateUrl: './agrichemical.component.html',
  styleUrls: ['./agrichemical.component.css']
})
export class AgrichemicalComponent implements OnInit {

  agrichemicalForm: FormGroup;
  agrichemicalList;
  agrichemicalId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private agrichemicalService: AgrichemicalService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.agrichemicalForm = this.fb.group({
      agrichemicalName : ['']
    });
    this.GetAgrichemical();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.agrichemicalId && this.agrichemicalId > 0)
    {
      const agrichemicalDataforUpdate = {
        agrichemicalId: this.agrichemicalId ,
        agrichemicalName: this.agrichemicalForm.controls.agrichemicalName.value };

      this.agrichemicalService.updateAgrichemical(agrichemicalDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetAgrichemical();
          this.agrichemicalForm.reset();
        });
    }
    else {
      this.agrichemicalService.saveAgrichemical(this.agrichemicalForm.value).subscribe(data => {
        this.GetAgrichemical();
        this.agrichemicalForm.reset();
      });
    }
    this.agrichemicalId = '';
    this.agrichemicalForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetAgrichemical() {
    this.agrichemicalService.getAllAgrichemical().subscribe(data => {
      this.agrichemicalList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editAgrichemical(id){
    this.agrichemicalService.getAgrichemicalById(id).subscribe((data: any) => {
      this.agrichemicalId = data.agrichemicalId;
      this.btnSave = 'Update';
      this.agrichemicalForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteAgrichemical(id){
    this.agrichemicalService.deleteAgrichemical(id).subscribe(data => {
      this.GetAgrichemical();
    });
  }
}
