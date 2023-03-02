import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

 
  constructor(public fb:FormBuilder,public ser:CommenserviceService,private r:Router,private route :ActivatedRoute,public router:Router) { }

  enquiryForm:FormGroup
  submitted = false;
  
    ngOnInit(): void {
      this.enquiryForm=this.fb.group({  
        cid:[this.ser.enquiry.cid,[Validators.required]],    
        firstname:[this.ser.enquiry.firstname,[Validators.required]],
        lastname:[this.ser.enquiry.lastname,[Validators.required]],
        age:[this.ser.enquiry.age,[Validators.required]],
        mobileno:[this.ser.enquiry.mobileno,[Validators.required]],
        pancardno:[this.ser.enquiry.pancardno,[Validators.required]],
        email:[this.ser.enquiry.email,[Validators.required]],
        cibilscore:[this.ser.enquiry.cibilscore,[Validators.required]],
        status:[this.ser.enquiry.status,[Validators.required]]
     
      })    
    }
  
    onSave(){   
      alert("save");
        console.log(this.enquiryForm.value)
        this.ser.createEnquiry(this.enquiryForm.value).subscribe();
        this.submitted = true;
        this.ngOnInit()
       // this.r.navigate(["../air-india-flights"],   {relativeTo: this.route})
        //this.ser.bus=this.regform.value  
        setTimeout(()=> {this.routing()},1000*1)

      }
      routing(){
        
        this.router.navigateByUrl("role/relation/emiDetails");
      }
  
}
