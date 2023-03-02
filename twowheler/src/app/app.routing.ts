import { MastermoduleModule } from './module/mastermodule/mastermodule.module';
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';
import { RelationexecutiveModule } from './module/relationexecutive/relationexecutive.module';
import { AbcModule } from './module/abc/abc.module';
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { FAQComponent } from './faq/faq.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FrontcomponentComponent } from './frontcomponent/frontcomponent.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProcesstoapplyComponent } from './processtoapply/processtoapply.component';
import { BankmanagerModule } from './module/bankmanager/bankmanager.module';
import { TelecallerheadModule } from './module/telecallerhead/telecallerhead.module';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[

      {path:'aboutus',component:AboutusComponent},
     {path:'emi',component:EmicalculatorComponent},
      {path:'faq',component:FAQComponent},
      {path:'contactus',component:ContactusComponent},
      {
        path:"",component:FrontcomponentComponent
      },{
        path:"apply",component:ProcesstoapplyComponent}
      

    
    ] 
  },
  {
    path:"log",component:LoginComponent
  },
  



  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'admin', loadChildren: () => MastermoduleModule},
      {path: 'emp', loadChildren: () => EmployeeModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>CreditmanagerModule},
      {path:'relation',loadChildren:()=>RelationexecutiveModule},
      {path:'ab',loadChildren:()=>AbcModule},
      {path:'ah',loadChildren:()=>AccountheadModule},
      {path:'bm',loadChildren:()=>BankmanagerModule},
      {path:'th',loadChildren:()=>TelecallerheadModule},
    ]
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  },
  

  
];



