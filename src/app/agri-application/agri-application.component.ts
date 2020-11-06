import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AgrichemicalService } from '../agrichemical/agrichemical.service';
import { ContractmanagerService } from '../contractmanager/contractmanager.service';
import { ContractorService } from '../contractor/contractor.service';
import { MethodService } from '../method/method.service';
import { ReasonService } from '../reason/reason.service';
import { RegionService } from '../region/region.service';
import { StatusService } from '../status/status.service';
import { AgriApplicationService } from './agri-application.service';

@Component({
  selector: 'app-agri-application',
  templateUrl: './agri-application.component.html',
  styleUrls: ['./agri-application.component.css']
})
export class AgriApplicationComponent implements OnInit {

  agrichemicalForm: FormGroup;
  btnSave = 'Save';
  ddlRegion;
  ddlContractor;
  ddlContractManager;
  ddlMethod;
  ddlReason;
  ddlAgrichemical1;
  ddlAgrichemical2;
  ddlAgrichemical3;
  ddlStatus;
  ddlUnit1: any = ['mL', 'L'];
  ddlUnit2: any = ['mL', 'L'];
  ddlUnit3: any = ['mL', 'L'];

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private http: HttpClient, private agriService: AgriApplicationService, private regionService: RegionService,
              private contractorService: ContractorService, private contractManagerService: ContractmanagerService,
              private method: MethodService, private reason: ReasonService, private agriChemical: AgrichemicalService,
              private status: StatusService, private route: Router) { }

  ngOnInit(): void {
    this.agrichemicalForm = this.fb.group({
      date : [''],
      fromtime : [''],
      totime : [''],
      region : [''],
      contractor : [''],
      contractmanager : [''],
      comments : [''],
      location : [''],
      method : [''],
      reason : [''],
      reasoncomments : [''],
      agrichemical1 : [''],
      agrichemical1volume : [''],
      agrichemical1unit : [''],
      agrichemical2 : [''],
      agrichemical2volume : [''],
      agrichemical2unit : [''],
      agrichemical3 : [''],
      agrichemical3volume : [''],
      agrichemical3unit : [''],
      postcomments : [''],
      status : ['']
    });
    this.GetRegion();
    this.GetContractor();
    this.GetContactManager();
    this.GetMethod();
    this.GetReason();
    this.GetAgrichemical();
    this.GetStatus();
  }

  // tslint:disable-next-line: typedef
  GetRegion() {
    this.regionService.getAllRegion().subscribe(data => {
      this.ddlRegion = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetContractor() {
    this.contractorService.getAllContractor().subscribe(data => {
      this.ddlContractor = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetContactManager() {
    this.contractManagerService.getAllCManager().subscribe(data => {
      this.ddlContractManager = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetMethod() {
    this.method.getAllMethod().subscribe(data => {
      this.ddlMethod = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetReason() {
    this.reason.getAllReason().subscribe(data => {
      this.ddlReason = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetAgrichemical() {
    this.agriChemical.getAllAgrichemical().subscribe(data => {
      this.ddlAgrichemical1 = data;
      this.ddlAgrichemical2 = data;
      this.ddlAgrichemical3 = data;
    });
  }

  // tslint:disable-next-line: typedef
  GetStatus() {
    this.status.getAllStatus().subscribe(data => {
      this.ddlStatus = data;
    });
  }

  // tslint:disable-next-line: typedef
  OnSubmit(){
    this.agriService.saveAgriChem(this.agrichemicalForm.value).subscribe(data => {
      this.agrichemicalForm.reset();
      this.route.navigateByUrl('/planned-application');
    });
  }

  // tslint:disable-next-line: typedef
  OnCancel(){
    this.route.navigateByUrl('/planned-application');
  }

}
