import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReasonService } from './reason.service';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.css']
})
export class ReasonComponent implements OnInit {

  reasonForm: FormGroup;
  reasonList;
  reasonId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private reasonService: ReasonService) { }

  ngOnInit(): void {
    this.reasonForm = this.fb.group({
      reasonName: ['']
    });
    this.GetReason();
  }

  // tslint:disable-next-line: typedef
  OnSubmit() {
    if (this.reasonId && this.reasonId > 0) {
      const reasonDataforUpdate = {
        reasonId: this.reasonId,
        reasonName: this.reasonForm.controls.reasonName.value
      };

      this.reasonService.updateReason(reasonDataforUpdate).subscribe(() => {
        this.btnSave = 'Save';
        this.GetReason();
        this.reasonForm.reset();
      });
    }
    else {
      this.reasonService.saveReason(this.reasonForm.value).subscribe(data => {
        this.GetReason();
        this.reasonForm.reset();
      });
    }
    this.reasonId = '';
    this.reasonForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetReason() {
    this.reasonService.getAllReason().subscribe(data => {
      this.reasonList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editReason(id) {
    this.reasonService.getReasonById(id).subscribe((data: any) => {
      this.reasonId = data.reasonId;
      this.btnSave = 'Update';
      this.reasonForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteReason(id) {
    if (confirm('Are you sure you want to delete this record?')){
      this.reasonService.deleteReason(id).subscribe(data => {
        this.GetReason();
      });
    }
  }

  // tslint:disable-next-line: typedef
  OnCancel() {
    this.reasonId = '';
    this.reasonForm.reset();
    this.btnSave = 'Save';
  }
}
