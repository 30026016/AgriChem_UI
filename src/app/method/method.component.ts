import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MethodService } from './method.service';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {

  methodForm: FormGroup;
  methodList;
  methodId;
  btnSave = 'Save';

  constructor(private fb: FormBuilder, private http: HttpClient, private methodService: MethodService) { }

  ngOnInit(): void {
    this.methodForm = this.fb.group({
      methodName : ['']
    });
    this.GetMethod();
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    if (this.methodId && this.methodId > 0)
    {
      const methodDataforUpdate = {
        methodId: this.methodId,
        methodName: this.methodForm.controls.methodName.value };

      this.methodService.updateMethod(methodDataforUpdate).subscribe(() => {
          this.btnSave = 'Save';
          this.GetMethod();
          this.methodForm.reset();
        });
    }
    else {
      this.methodService.saveMethod(this.methodForm.value).subscribe(data => {
        this.GetMethod();
        this.methodForm.reset();
      });
    }
    this.methodId = '';
    this.methodForm.reset();
  }

  // tslint:disable-next-line: typedef
  GetMethod() {
    this.methodService.getAllMethod().subscribe(data => {
      this.methodList = data;
    });
  }

  // tslint:disable-next-line: typedef
  editMethod(id){
    this.methodService.getMethodById(id).subscribe((data: any) => {
      this.methodId = data.methodId;
      this.btnSave = 'Update';
      this.methodForm.patchValue(data);
    });
  }

  // tslint:disable-next-line: typedef
  deleteMethod(id){
    this.methodService.deleteMethod(id).subscribe(data => {
      this.GetMethod();
    });
  }
}
