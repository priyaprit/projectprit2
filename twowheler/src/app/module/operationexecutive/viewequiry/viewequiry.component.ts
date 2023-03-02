import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enquiry } from 'app/model/enquiry';
import { CommenserviceService } from 'app/sharednew/commenservice.service';
@Component({
  selector: 'app-viewequiry',
  templateUrl: './viewequiry.component.html',
  styleUrls: ['./viewequiry.component.css']
})
export class ViewequiryComponent implements OnInit {

  
  constructor(public cs:CommenserviceService, public r:Router,public route:ActivatedRoute) { }

  ellist:Enquiry[];

  ngOnInit(): void {
    this.cs.getEnquiryList().subscribe((data:Enquiry[])=>
    this.ellist=data        
    )}

    getCibil(cid:number){
      this.cs.getCibil(cid).subscribe();
      window.location.reload();
    }
  
}
