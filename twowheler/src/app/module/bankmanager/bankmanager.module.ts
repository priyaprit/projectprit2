import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppComponent } from './view-app/view-app.component';
import { EmiComponent } from './emi/emi.component';
import { EmiDetailsComponent } from './emi-details/emi-details.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../mastermodule/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

const routing: Routes = [
  
  {path:'viewapp',component:ViewAppComponent},
  {path:'emi',component:EmiComponent},
  {path:'emidetails',component:EmiDetailsComponent}



];

@NgModule({
  declarations: [ViewAppComponent, EmiComponent, EmiDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),ReactiveFormsModule
  ]
})
export class BankmanagerModule { }
