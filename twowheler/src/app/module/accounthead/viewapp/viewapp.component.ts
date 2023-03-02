import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicantlist } from 'app/model/applicantlist';
import { Customer } from 'app/model/Customer';
import { Sanction } from 'app/model/sanction';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css']
})
export class ViewappComponent implements OnInit {

  
  constructor(private route :ActivatedRoute,
    public ser:CommenserviceService,public router:Router ) { }

  appList:Applicantlist[]
 apppList:Customer[]
s:Sanction[];
  ngOnInit() {
      this.ser.getApplicantsWithStatus("verified").subscribe((data:Customer[])=>
    this.apppList=data )  
  // this.ser.getApplicantsWithStatus("verified").subscribe((data:Sanction[])=>
  //  this.s=data )  
  };
  
  retrievedDoc:Document;
  // sanction(e:Applicantlist)
  //{   
  //   this.ser.sanction.sanctionId=id;
  //   this.ser.getSanction(id).subscribe((data:Sanction)=>
  //   {this.ser.sanction=data
    
  //   console.log(this.ser.sanction);    
  // })
  // setTimeout(() => {this.routing()},1000*1)
 // this.router.navigate(['/role/ah/sanction'],{queryParams :{id: e.id}});
 
//}
// retrievedDoc:Document;
sanction(id:number)
{   alert("in ts")
  this.ser.sanctionId=id;
  this.ser.getSanctions(id).subscribe((data:Sanction)=>
  {this.ser.sanction=data
  
  console.log(this.ser.sanction);    
})
setTimeout(() => {this.routing()},1000*1)


 }

update(e:Sanction){
  this.ser.updateSanctions(e).subscribe();
  //this.ser.saves(e).subscribe();
  setTimeout(()=> {this.routing()},1000*1)
}
editSanction(fl:Sanction){
  alert("in edit")
  this.ser.sanction=Object.assign({},fl) 
  //setTimeout(()=> {this.routing()},1000*1)
}
sendmail(cid:number){
alert("in ts")
this.ser.maill(cid).subscribe();
}
delete(e:Applicantlist)
{   
//   //this.ser.s.id=id;
    this.ser.delete(e.id).subscribe();
    this.ngOnInit();

}

routing(){
  
  this.router.navigateByUrl("role/ah/sanction");
}

}

