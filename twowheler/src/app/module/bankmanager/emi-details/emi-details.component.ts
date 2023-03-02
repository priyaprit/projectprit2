import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emi } from 'app/model/emi';
import { EmiCustomer } from 'app/model/emi-customer';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-emi-details',
  templateUrl: './emi-details.component.html',
  styleUrls: ['./emi-details.component.css']
})
export class EmiDetailsComponent implements OnInit {

  constructor(public repo: CommenserviceService,public router:Router) { }
  //constructor(public repo:CommenserviceService,private modalService: ModalService) { }
  applist: EmiCustomer[]
  //aplist:Customer[];
  elist: Emi[];
  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EmiCustomer[]) =>
      this.applist = data

    )


  }
  emilist: Emi[];

  getemis(id: number) {
    alert("Success")

    this.repo.getEmi(id).subscribe((data: Emi[]) => {
      this.emilist = data
      
    });
  //   setTimeout(()=> {this.routing()},1000*1)

  // }
  // routing(){
    
  //   this.router.navigateByUrl("role/bm/emidetails");
  }
  emie(id: number) {
   
    this.repo.emii(id).subscribe()

  }



}


