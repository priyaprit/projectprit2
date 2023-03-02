import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emi } from 'app/model/emi';
import { EmiCustomer } from 'app/model/emi-customer';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  constructor(public repo:CommenserviceService,public router:Router){}
  //constructor(public repo:CommenserviceService,private modalService: ModalService) { }
  applist:EmiCustomer[]
  //aplist:Customer[];
elist:Emi[];
  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EmiCustomer[])=>
    this.applist=data    

    )

   
  }
  emilist:Emi[];

  getemis(id:number)
  {  
      this.repo.getEmi(id).subscribe((data:Emi[])=>{
      this.emilist=data        
  });
  setTimeout(()=> {this.routing()},1000*1)

}
routing(){
  
  this.router.navigateByUrl("role/bm/emidetails");
}
//   emi(id:number,Date:string)
//   { 
//     alert("emi in ts")
//     this.repo.emii(id,Date).subscribe() 
// } 


}


