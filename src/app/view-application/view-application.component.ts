import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgriApplicationService } from '../agri-application/agri-application.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {

  agriList;
  region;
  Contractor;
  PlannedDate;
  Location;
  Agrichemical1;
  Agrichemical2;
  Agrichemical3;
  ApplicationMethod;
  ReasonforApplication;
  Comments;
  fromTime;
  toTime;
  ContractManager;

  constructor(private fb: FormBuilder, private http: HttpClient, private agriService: AgriApplicationService) { }

  ngOnInit(): void {
    this.agriList = JSON.parse(localStorage.getItem('agriData'));
    console.log(this.agriList);
    this.region = this.agriList.region;
    this.Contractor = this.agriList.contractor;
    this.PlannedDate = this.agriList.date;
    this.Location = this.agriList.location;
    this.Agrichemical1 = this.agriList.agriChemical1;
    this.Agrichemical2 = this.agriList.agriChemical2;
    this.Agrichemical3 = this.agriList.agriChemical3;
    this.ApplicationMethod = this.agriList.method;
    this.ReasonforApplication = this.agriList.reason;
    this.Comments = this.agriList.comments;
    this.fromTime = this.agriList.fromTime;
    this.toTime = this.agriList.toTime;
    this.ContractManager = this.agriList.contractManager;
  }

}
