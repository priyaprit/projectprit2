import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customerdocument } from 'app/model/customerdocument';
import { CommenserviceService } from 'app/sharednew/commenservice.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  srcResult: any;

  constructor(private fb:FormBuilder, public rs:CommenserviceService) { }

  ngOnInit(): void {
    this.doc=this.fb.group({

      cid:[this.rs.c.cid,[Validators.required]],
      
    }
    
    )
    
  }

  adharcardaddressproof:any;
  profilePhoto:any;
  signature:any;
  pancard:any;
  incomeproof:any;
  doc:FormGroup;
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
}
onselectFile1(event:any){

  this.profilePhoto=event.target.files[0];
} onselectFile5(event:any){

  this.adharcardaddressproof=event.target.files[0];
}onselectFile2(event:any){

  this.signature=event.target.files[0];
}

onselectFile3(event:any){

  this.pancard=event.target.files[0];
}

onselectFile4(event:any){

  this.incomeproof=event.target.files[0];
}

Submit(){  
 
  alert("in ts")
  const d=JSON.stringify(this.doc.value);

  const em=new FormData();
  em.append("adharcardaddressproof",this.adharcardaddressproof);
  em.append("profilePhoto",this.profilePhoto);
  em.append("signature",this.signature);
  em.append("pancard",this.pancard);
  em.append("incomeproof",this.incomeproof);
  em.append("cid",d);
 
  console.log(em)

this.rs.upload(em).subscribe();

this.rs.c.cid=0;
this.ngOnInit();
}
}


