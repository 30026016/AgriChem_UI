import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatusService } from './status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  statusForm: FormGroup;
  statusList;
  statusId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private statusService: StatusService) { }

  ngOnInit(): void {
    this.statusForm = this.fb.group({
      statusName : ['']
    });
    this.GetStatus();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.statusId && this.statusId > 0)
    {
      const statusDataforUpdate = {
        statusId: this.statusId,
        statusName: this.statusForm.controls.statusName.value };

      this.statusService.updateStatus(statusDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetStatus();
          this.statusForm.reset();
        });
    }
    else {
      this.statusService.saveStatus(this.statusForm.value).subscribe(data => {
        this.GetStatus();
        this.statusForm.reset();
      });
    }
    this.statusId = '';
    this.statusForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetStatus() {
    this.statusService.getAllStatus().subscribe(data => {
      this.statusList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editStatus(id){
    this.statusService.getStatusById(id).subscribe((data: any) => {
      this.statusId = data.statusId;
      this.btnSave = 'Update';
      this.statusForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteStatus(id){
    if (confirm('Are you sure you want to delete this record?')){
      this.statusService.deleteStatus(id).subscribe(data => {
        this.GetStatus();
      });
    }
  }

  // tslint:disable-next-line: typedef
  OnCancel(){
    this.statusId = '';
    this.btnSave = 'Save';
    this.statusForm.reset();
  }
}
