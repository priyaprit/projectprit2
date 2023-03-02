import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Mail } from 'app/model/mail';
import { RegisterServiceService } from 'app/shared/register-service.service';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit {
  
  sanctionletter:FormGroup
  submitted=false;
  constructor(public fb:FormBuilder,public ser:CommenserviceService,public router:Router) {

   }

  ngOnInit(): void {
    //setTimeout(() => {this.ngOnInit()},100*1)
    
    
    this.sanctionletter=this.fb.group(
      {  sanctionId:[this.ser.sanction.sanctionId,[Validators.required]],
        sanctionDate:[this.ser.sanction.sanctionDate,[Validators.required]],
        applicantName:[this.ser.sanction.applicantName,[Validators.required]],
        contactDetails:[this.ser.sanction.contactDetails,[Validators.required]],
        productHomeEnquiry:[this.ser.sanction.productHomeEnquiry,[Validators.required]],
        loanAmountSanctioned:[this.ser.sanction.loanAmountSanctioned,[Validators.required]],
        interestType:[this.ser.sanction.interestType,[Validators.required]],
        rateOfInterest:[this.ser.sanction.rateOfInterest,[Validators.required]],
        loanTenure:[this.ser.sanction.loanTenure,[Validators.required]],
        modeOfPayment:[this.ser.sanction.modeOfPayment,[Validators.required]],
        monthlyEmiAmount:[this.ser.sanction.monthlyEmiAmount,[Validators.required]],
        remarks:[this.ser.sanction.remarks,[Validators.required]],
        termsCondition:[this.ser.sanction.termsCondition,[Validators.required]],
        status:[this.ser.sanction.status,[Validators.required]]
      }
    )
    
   
  }

  onSave(){  
    alert("in ts") 
    
    console.log(this.sanctionletter.value)
    this.ser.saves(this.sanctionletter.value).subscribe();
    //this.ser.updateSanction(this.ser.sanction.sanctionId,this.sanctionletter.value).subscribe();
    alert(this.ser.sanction.sanctionId)
    this.submitted=true;
    this.ngOnInit();
    //window.location.reload(); 
    //const eemail=new Mail()
    setTimeout(() => {this.routing()},1000*1)
    //this.ser.maill(cid).subscribe();   
  } 
  routing(){
  
    this.router.navigateByUrl("role/ah/viewapp");
  }

  //blob:any;

  // genPdf(){
  //   alert(this.sanctionletter.controls['loanNumber'].value)

  //   this.repo.genPdf(this.sanctionletter.controls['loanNumber'].value).subscribe(response=>{
  //     this.blob = new Blob([response], {type: 'application/pdf'});

  //     var downloadURL = window.URL.createObjectURL(response);
  //     var link = document.createElement('a');
  //     link.href = downloadURL;
  //     link.download = "help.pdf";
  //     link.click()

  // })}

  // genExcel(){
  //   alert(this.sanctionletter.controls['loanNumber'].value)
  //   this.repo.genExcel(this.sanctionletter.controls['loanNumber'].value).subscribe(response=>{
  //     const blob = new Blob([response], {type: 'application/octet-stream'});
  //     const url= window.URL.createObjectURL(blob);
  //     window.open(url);

  // })}
 



}
