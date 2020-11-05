import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegionComponent } from './region/region.component';
import { ContractorComponent } from './contractor/contractor.component';
import { AgriApplicationComponent } from './agri-application/agri-application.component';
import { ContractmanagerComponent } from './contractmanager/contractmanager.component';
import { AgrichemicalComponent } from './agrichemical/agrichemical.component';
import { LocationComponent } from './location/location.component';
import { MethodComponent } from './method/method.component';
import { ReasonComponent } from './reason/reason.component';
import { StatusComponent } from './status/status.component';
import { PlannedApplicationComponent } from './planned-application/planned-application.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegionComponent,
    ContractorComponent,
    AgriApplicationComponent,
    ContractmanagerComponent,
    AgrichemicalComponent,
    LocationComponent,
    MethodComponent,
    PlannedApplicationComponent,
    ReasonComponent,
    StatusComponent,
    ViewApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
