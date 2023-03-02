import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { Customerdocument } from 'app/model/customerdocument';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-creditmanager',
  templateUrl: './creditmanager.component.html',
  styleUrls: ['./creditmanager.component.css']
})
export class CreditmanagerComponent implements OnInit {

  constructor(public cs:CommenserviceService) { }

  applist:Customer[];


  ngOnInit(): void {
    // setTimeout(() => {this.ngOnInit()},1000*1)
   
    this.cs.getApplicants().subscribe((data:Customer[])=>{
     this.applist=data
    
console.log(this.applist)  
    
    }
    )}
    
  retrievedDoc:Customerdocument={
    docId: 0,
    cid: 0,
    profilePhoto: [],
    signature: [],
    pancard: [],
    adharcardaddressproof: [],
    incomeproof: []
  }
  image(id:number)
  {
    this.cs.getDoc(id).subscribe((d:Customerdocument)=>{
  
      this.retrievedDoc = d;
  
    });
  }

  verification(id:number)
  {
    this.cs.appStatus(id).subscribe();
    setTimeout(() => {this.ngOnInit()},1000*1)
  }

  verificationFailed(id:number)
  {
    this.cs.appStatusFailed(id).subscribe();
    
    setTimeout(() => {this.ngOnInit()},1000*1)
  }



}
