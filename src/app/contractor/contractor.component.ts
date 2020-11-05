import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContractorService } from './contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  contractorForm: FormGroup;
  contractorList;
  contractorId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private contractorService: ContractorService) { }

  ngOnInit(): void {
    this.contractorForm = this.fb.group({
      contractorName : ['']
    });
    this.GetContractor();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.contractorId && this.contractorId > 0)
    {
      const contractorDataforUpdate = {
        contractorId: this.contractorId ,
        contractorName: this.contractorForm.controls.contractorName.value };

      this.contractorService.updateContractor(contractorDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetContractor();
          this.contractorForm.reset();
        });
    }
    else {
      this.contractorService.saveContractor(this.contractorForm.value).subscribe(data => {
        this.GetContractor();
        this.contractorForm.reset();
      });
    }
    this.contractorId = '';
    this.contractorForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetContractor() {
    this.contractorService.getAllContractor().subscribe(data => {
      this.contractorList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editContractor(id){
    this.contractorService.getContractorById(id).subscribe((data: any) => {
      this.contractorId = data.contractorId;
      this.btnSave = 'Update';
      this.contractorForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteContractor(id){
    this.contractorService.deleteContractor(id).subscribe(data => {
      this.GetContractor();
    });
  }

  OnCancel() {
    this.contractorId = '';
    this.contractorForm.reset();
    this.btnSave = "Save";
  }

}
