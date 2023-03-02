import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerComponent } from './ledger/ledger.component';
import { SanctionComponent } from './sanction/sanction.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ahrouting: Routes = [
  {path: 'abcdash', component:DashboardComponent },
  {path: "sanction", component:SanctionComponent },
  {path:'viewapp',component:ViewappComponent}
  
];

@NgModule({
  declarations: [LedgerComponent, SanctionComponent, ViewappComponent],
  imports: [
    CommonModule,RouterModule.forChild(ahrouting),ReactiveFormsModule,FormsModule
    

    
  ]
})
export class AccountheadModule { }
