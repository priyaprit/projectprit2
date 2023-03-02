import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterServiceService } from 'app/shared/register-service.service';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  steps:any=1;
  adharcardaddressproof:any;
  profilePhoto:any;
  signature:any;
  pancard:any;
  incomeproof3:any;
CregForm:FormGroup;
doc:FormGroup;
  constructor(public fb:FormBuilder, public rs:RegisterServiceService,public router:Router,public cs:CommenserviceService) { }

  ngOnInit(): void {


    this.CregForm=this.fb.group({
      cid:['',[Validators.required]],
cname:['',[Validators.required]],
age:['',[Validators.required]],
emailid:['',[Validators.required]],
status:['',[Validators.required]],
//customerTotalLoanRequired:[],


customeraddress:this.fb.group({
customeraddressid:[],
areaname:[],
cityname:[],	 
district:[],
state:[],
streetname:[],
houseno:[],
pincode:[],

}),

profession:this.fb.group({
  professionid:[],
  professiontype:[],
  professionsalary:[],
  profsalarytype:[],
  professionworkingperiod:[],
  professiondesignation:[]

}),
cibil:this.fb.group({
cid:[],
cibilscore:[],
scoreabove:[],
scorebelow:[],
mark:[]


}),
currentloan:this.fb.group({
  
currentloanid:[],
currentloanno:[],
emiamount:[],
loanamount:[],
rateofinterest:[],
tenure:[],
totalamtpaid:[],
processingfees:[],
totalinterest:[],
sanctiondate:[]


}),
accdetails:this.fb.group({
  accountId:[],
	accounType:[],
    accountBalance:[],
	accountHolderName:[],
	accountStatus:[],
	accountNumber:[]
}),
sanction:this.fb.group({
  sanctionId:[],
  sanctionDate:[],
  applicantName:[],
  contactDetails:[],
  productHomeEnquiry:[],
  loanAmountSanctioned:[],
  interestType:[],
  rateOfInterest:[],
  loanTenure:[],
  monthlyEmiAmount:[],
  modeOfPayment:[],
  remarks:[],
  termsCondition:[],
  status:[],


}),
edudetails:this.fb.group({

  eduid:[],
  educationtype:[],

}),
Previousloandetails:this.fb.group({
  previousloanid:[],
  previousloanamount:[],
  previousloantenure:[],
  previousloanpaidamount:[],
  previousloanremainingAmount:[],
  previousloandefaulterCount:[],
  previousloanstatus:[],
  previousloanremark:[]



}),

garantordetails:this.fb.group({
  gid:[],
	gdob:[],
  gname:[],
	gmobileno:[],
	gaddress:[],
	relationship:[],
	occupation:[],
	detailsofincome:[],
	pandetails:[],
	gender:[],
	areaname:[],
	cityname:[],
	district:[],
	state:[],
	streetname:[],
	pincode:[]
}),

carinfo:this.fb.group({
  carmodelno:[],
carname:[],
brandname:[],
carprice:[],

})


})

  }
    

    
  
  
  saveCustomerData()
    
    {
  this.steps=this.steps +1;
    }

    previous(){
      this.steps=this.steps -1;
    }

    
    saveInfo(){
     
      console.log(this.CregForm.value)
      console.log(this.CregForm.controls[''])
      this.cs.saveInfo(this.CregForm.value).subscribe((no:number)=>{
        this.cs.c.cid=no;
        console.log(this.cs.c.cid);
        
       } );
      setTimeout(() => {this.routing()},2000*1)
      
    }

    routing(){
      this.router.navigateByUrl("role/relation/oedocument");
    }
   
    

}
