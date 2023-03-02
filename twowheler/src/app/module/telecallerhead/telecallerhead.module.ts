import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { ViewdefaultComponent } from './viewdefault/viewdefault.component';
import { DashboardComponent } from '../mastermodule/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routing: Routes = [
  {path: 'abcdash', component:DashboardComponent },
  {path:'viewapplication',component:ViewapplicationComponent},
  {path:'viewdefault',component:ViewdefaultComponent},
  



];

@NgModule({
  declarations: [ViewapplicationComponent, ViewdefaultComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),ReactiveFormsModule
  ]
})
export class TelecallerheadModule { }
