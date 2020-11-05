import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AgriApplicationService } from '../agri-application/agri-application.service';

@Component({
  selector: 'app-planned-application',
  templateUrl: './planned-application.component.html',
  styleUrls: ['./planned-application.component.css']
})
export class PlannedApplicationComponent implements OnInit {

  agriList;

  constructor(private fb: FormBuilder, private http: HttpClient, private agriService: AgriApplicationService) { }

  ngOnInit(): void {
    this.GetAgriApplication();
  }

  // tslint:disable-next-line: typedef
  GetAgriApplication(){
    this.agriService.getAllAgriApplication().subscribe(data => {
      this.agriList = data;
    });
  }

  // tslint:disable-next-line: typedef
  ViewAgriApplication(id){
  }

}
