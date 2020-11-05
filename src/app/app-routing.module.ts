import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgriApplicationComponent } from './agri-application/agri-application.component';
import { AgrichemicalComponent } from './agrichemical/agrichemical.component';
import { ContractmanagerComponent } from './contractmanager/contractmanager.component';
import { ContractorComponent } from './contractor/contractor.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MethodComponent } from './method/method.component';
import { PlannedApplicationComponent } from './planned-application/planned-application.component';
import { ReasonComponent } from './reason/reason.component';
import { RegionComponent } from './region/region.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'region', component: RegionComponent},
  {path: 'contractor', component: ContractorComponent},
  {path: 'agri-application', component: AgriApplicationComponent},
  {path: 'contractmanager', component: ContractmanagerComponent},
  {path: 'agrichemical', component: AgrichemicalComponent},
  {path: 'location', component: LocationComponent},
  {path: 'method', component: MethodComponent},
  {path: 'reason', component: ReasonComponent},
  {path: 'status', component: StatusComponent},
  {path: 'planned-application', component: PlannedApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
