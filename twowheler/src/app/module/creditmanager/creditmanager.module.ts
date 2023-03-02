import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditmanagerComponent } from './creditmanager/creditmanager.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAppComponent } from './view-app/view-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../mastermodule/dashboard/dashboard.component';
import { MatStepperModule } from '@angular/material/stepper';

const routin: Routes = [
  {path: "abcdash", component:DashboardComponent },
  {path: "credit", component:CreditmanagerComponent },
  {path:'viewapp',component:ViewAppComponent}
  
];

@NgModule({
  declarations: [CreditmanagerComponent, ViewAppComponent],
  imports: [
    CommonModule,RouterModule.forChild(routin),ReactiveFormsModule,MatStepperModule
  ]
})
export class CreditmanagerModule { }
