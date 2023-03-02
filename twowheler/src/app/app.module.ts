import { CityServiceService } from './module/shared/city-service.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ViewenquiryComponent } from './module/relationexecutive/viewenquiry/viewenquiry.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

import { FAQComponent } from './faq/faq.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { FrontcomponentComponent } from './frontcomponent/frontcomponent.component';
import { ProcesstoapplyComponent } from './processtoapply/processtoapply.component';
import { WhatweofferComponent } from './whatweoffer/whatweoffer.component';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table"
import {MatInputModule} from "@angular/material/input"
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


import {MatStepperModule} from '@angular/material/stepper';
import { Ng5SliderModule } from 'ng5-slider';
import { NavbarComponent } from './shared/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,LoginComponent, HomeComponent, ViewenquiryComponent, AboutusComponent, ContactusComponent, FAQComponent,EmicalculatorComponent, FrontcomponentComponent, ProcesstoapplyComponent, WhatweofferComponent
  ],
  imports: [
    BrowserAnimationsModule,HttpClientModule,FormsModule,
    SidebarModule,Ng5SliderModule,ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,MatFormFieldModule,
    MatStepperModule, 
    MatFormFieldModule,
    MatInputModule,
    NavbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
   SidebarModule,
    ToastrModule.forRoot(),
    FooterModule,FormsModule,
    FixedPluginModule
  ],
  providers: [CityServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
