import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { DocumentComponent } from './document/document.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { MatHorizontalStepper, matStepperAnimations, MatStepperModule, MatVerticalStepper } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { DashboardComponent } from '../mastermodule/dashboard/dashboard.component';
import { Ng5SliderModule } from 'ng5-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialmoduleModule } from 'app/materialmodule/materialmodule.module';


const routing: Routes = [
  {path: "abcdash", component:DashboardComponent },
  {path: 'oeenquiry', component:EnquiryComponent },
  {path:'oecustomer',component:CustomerregisterComponent},
  {path:'oedocument',component:DocumentComponent},
  {path:'oeviewenq',component:ViewenquiryComponent}
  
];
@NgModule({
  declarations: [CustomerregisterComponent, DocumentComponent, EnquiryComponent, ViewenquiryComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),ReactiveFormsModule,MaterialmoduleModule,MatStepperModule
  ]
})
export class RelationexecutiveModule { }
