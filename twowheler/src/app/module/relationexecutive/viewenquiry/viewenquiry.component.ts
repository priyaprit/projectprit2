import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Email } from 'app/model/email';
import { Enquiry } from 'app/model/enquiry';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent implements OnInit {
  constructor(public cs:CommenserviceService, public r:Router,public route:ActivatedRoute
    ) { }

  ellist:Enquiry[]

  ngOnInit(): void {
   
    this.cs.getEnquiryList().subscribe((data:Enquiry[])=>
    this.ellist=data        
    )}
  
  deleteEnquiry(id:number){
    this.cs.deleteEnquiry(id).subscribe()
    window.location.reload();
  }
  update(eq:Enquiry){
    this.cs.createEnquiry(eq).subscribe();
   setTimeout(()=>{this.routing()},2000*1)
  }

  editEnquiry(fl:Enquiry){
    alert("in edit")
    this.cs.enquiry=Object.assign({},fl)
    setTimeout(()=>{this.routingg()},2000*1) 
  }
  routingg(){

    this.r.navigateByUrl("role/relation/oeenquiry")
  }
routing(){

  this.r.navigateByUrl("role/relation/oecustomer")
}


  rejectmail(cid:number){
 const email=new Email()
// email.id=e.cid
// email.name=e.firstname
// email.sender=e.email
// email.status=e.status

    this.cs.email(cid).subscribe();
  }


}
