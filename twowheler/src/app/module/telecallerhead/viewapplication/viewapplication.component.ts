import { Component, OnInit } from '@angular/core';
import { EmiCustomer } from 'app/model/emi-customer';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-viewapplication',
  templateUrl: './viewapplication.component.html',
  styleUrls: ['./viewapplication.component.css']
})
export class ViewapplicationComponent implements OnInit {
  constructor(public repo:CommenserviceService) { }
  applist:EmiCustomer[]

  ngOnInit(): void {
    this.repo.getEmiCust().subscribe((data:EmiCustomer[])=>
    this.applist=data        
    )}
    

  emi(id:number,date:string)
  { 
    this.repo.emi(id,date).subscribe() 
} 

}
