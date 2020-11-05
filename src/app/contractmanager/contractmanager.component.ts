import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractmanagerService } from './contractmanager.service';

@Component({
  selector: 'app-contractmanager',
  templateUrl: './contractmanager.component.html',
  styleUrls: ['./contractmanager.component.css']
})
export class ContractmanagerComponent implements OnInit {

  contractManagerForm: FormGroup;
  contractManagerList;
  contractManagerId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private contractManagerService: ContractmanagerService) { }

  ngOnInit(): void {
    this.contractManagerForm = this.fb.group({
      contractManagerName : ['']
    });
    this.GetContactManager();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.contractManagerId && this.contractManagerId > 0)
    {
      const cManagerDataforUpdate = {
        contractManagerId: this.contractManagerId ,
        contractManagerName: this.contractManagerForm.controls.contractManagerName.value };

      this.contractManagerService.updateCManager(cManagerDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetContactManager();
          this.contractManagerForm.reset();
        });
    }
    else {
      this.contractManagerService.saveCManager(this.contractManagerForm.value).subscribe(data => {
        this.GetContactManager();
        this.contractManagerForm.reset();
      });
    }
    this.contractManagerId = '';
    this.contractManagerForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetContactManager() {
    this.contractManagerService.getAllCManager().subscribe(data => {
      this.contractManagerList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editContractManager(id){
    this.contractManagerService.getCManagerById(id).subscribe((data: any) => {
      this.contractManagerId = data.contractManagerId;
      this.btnSave = 'Update';
      this.contractManagerForm.patchValue(data);
    });

  }

  // tslint:disable-next-line: typedef
  deleteContractManager(id){
    this.contractManagerService.deleteCManager(id).subscribe(data => {
      this.GetContactManager();
    });
  }

  OnCancel() {
    this.contractManagerId = '';
    this.contractManagerForm.reset();
    this.btnSave = "Save";
  }
}
