import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicantlist } from 'app/model/applicantlist';
import { Sanction } from 'app/model/sanction';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent implements OnInit {
  constructor(public rg:CommenserviceService,public router:Router,public repo:CommenserviceService) { }
  //applist:Customer[]
  applist:Applicantlist[]
  s:Sanction[]
  ngOnInit(): void {
    
    this.rg.getApplicantsWithStatuss("sanction").subscribe((data:Applicantlist[])=>
    this.applist=data        
    )
  }
  retrievedDoc:Document;
  sanction(id:number)
  {   
    this.rg.s.sanctionId=id;
    this.rg.getSanctoin(id).subscribe((data:Sanction)=>
    {this.rg.sanction=data
    
    console.log(this.rg.sanction);

    
   })


  // this.router.navigateByUrl("role/ah/sanction");
}

sendmail(id:number){
  alert("in ts")
  this.rg.mailll(id).subscribe();
  }
disburstment(id:number,name:string){
    this.repo.loanDisbs(id,name).subscribe();

}

pdf(id:number)
{ 
  window.open("http://localhost:9092/pdfgeneratee/"+id)
} 

excel(id:number)
{ 
  window.open("http://localhost:9092/excelfilee/"+id)
} 

 
 
}


