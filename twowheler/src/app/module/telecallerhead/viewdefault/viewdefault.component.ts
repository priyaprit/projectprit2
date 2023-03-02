import { Component, OnInit } from '@angular/core';
import { EmiCustomer } from 'app/model/emi-customer';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-viewdefault',
  templateUrl: './viewdefault.component.html',
  styleUrls: ['./viewdefault.component.css']
})
export class ViewdefaultComponent implements OnInit {

  constructor(public repo:CommenserviceService) { }
  applist:EmiCustomer[]
  

  ngOnInit(): void {
    this.repo.getDefCust().subscribe((data:EmiCustomer[])=>
    this.applist=data        
    )}

    notice(id:number) {
     
      this.repo.notice(id).subscribe();
    }


}
