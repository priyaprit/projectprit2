import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Applicantlist } from 'app/model/applicantlist';
import { Customer } from 'app/model/Customer';
import { Customerdocument } from 'app/model/customerdocument';
import { Email } from 'app/model/email';
import { EmiCustomer } from 'app/model/emi-customer';
import { Enquiry } from 'app/model/enquiry';
import { Sanction } from 'app/model/sanction';
import { Alert } from 'bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommenserviceService {
  
  public baseUrl = 'http://localhost:9092';
  constructor(private http: HttpClient) { }
  enquiry:Enquiry={
    cid: 0,
    firstname: '',
    lastname: '',
    age: 0,
    email: '',
    mobileno: '',
    pancardno: '',
    cibilscore: 0,
    status: ''
  }
  c:Customer={
    cid: 0,
    cname: undefined,
    age: 0,
    emailid: '',
    status: '',
    carinfo: [],
    accdetails: [],
    edudetails: [],
    profession: [],
    customeraddress: [],
    currentloan: [],
    previousloan: [],
    garantordetails: [],
    cibil: [],
    sanction: []
  }
  cs:Customerdocument={
    docId: 0,
    cid: 0,
    profilePhoto: [],
    signature: [],
    pancard: [],
    adharcardaddressproof: [],
    incomeproof: []
  }
  a:Applicantlist={
    id: 0,
    name: '',
    age: 0,
    emailid: '',
    sanctionamount: 0,
    status: '',
    action: ''
  }
  sanction:Sanction={
    sanctionId: 0,
    sanctionDate: '',
    applicantName: undefined,
    contactDetails: '',
    productHomeEnquiry: '',
    loanAmountSanctioned: 0,
    interestType: '',
    rateOfInterest: 0,
    loanTenure: 0,
    monthlyEmiAmount: 0,
    modeOfPayment: '',
    remarks: '',
    termsCondition: '',
    status: ''
  }
  s:Sanction={
    sanctionId: 0,
    sanctionDate: '',
    applicantName: undefined,
    contactDetails: '',
    productHomeEnquiry: '',
    loanAmountSanctioned: 0,
    interestType: '',
    rateOfInterest: 0,
    loanTenure: 0,
    monthlyEmiAmount: 0,
    modeOfPayment: '',
    remarks: '',
    termsCondition: '',
    status: ''
  }
  e:EmiCustomer={
    cusid: 0,
    name: '',
    sanctionAmount: 0,
    rateofInt: 0,
    tenure: 0,
    emailid: '',
    ledger: [],
    emiDetails: []
  }
  //getEnquiry(id: number): Observable<any> {
  //  return this.http.get(`${this.baseUrl}/getallenqdata/${id}`);
  //}
id:number;
sanctionId:number;
  createEnquiry(enqiry: Enquiry): Observable<Object> {
    alert("inenuiry");
    if(enqiry.cid==0){
      enqiry.status="enquiry"
    }
    else{
      alert("inelse")
      enqiry.status="registred"
    }
    
    return this.http.post("http://localhost:9092/saveEnquiry", enqiry);
  }
  updateSanction(id: number, value: any): Observable<Sanction> {
    return this.http.put<Sanction>("http://localhost:9092/updateSanctiondata/"+id, value);
   // return this.http.post("http://localhost:9092/saveEnquiry/", enqiry);
  }
 
  updateEnquiry(id: number, value: any): Observable<Object> {
    return this.http.put("http://localhost:9092/updatedataenq/",+id ,value);
  }

  deleteEnquiry(cid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteenqdata/${cid}`, { responseType: 'text' });
  }

  getEnquiryList(): Observable<any> {
    return this.http.get("http://localhost:9092/getallenqdata");
  }

  getCibil(cid:number):Observable<any> {
    
alert("getcibil")
    return this.http.get("http://localhost:9092/getCibilEnquiry/"+cid);
  }
  email(cid:number):any{
alert("inemail")
    return this.http.post("http://localhost:9092/mailrejectsendEnquiry/"+cid,{responseType:'text'})
  }
  saveInfo(c: Customer): any {
  console.log(c);
    return this.http.post("http://localhost:9092/saveCustomer", c,{responseType: 'text'});
  }

  getApplicants(): any {
    return this.http.get("http://localhost:9092/getallcustdata");
  }

  httpOptions = {
    headers : new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

upload(em:FormData){
  alert("in cs")
  console.log(em);

  return this.http.post("http://localhost:9092/api/document", em);
}
getApplicantsWithStatus(status:string): any {
  return this.http.get("http://localhost:9092/getbystatus/"+status);
}
getDoc(id:number):Observable<any>{
alert("in service")
  return this.http.get<Customerdocument[]>("http://localhost:9092/api/getDocc/"+id);

}
saves(s:Sanction){
  alert("save cs")
  return this.http.put<Sanction>("http://localhost:9092/postSingleDataSanction", s);
}
// updatesanction(id:number,value:any): Observable<Object>{

//   return this.http.put("http://localhost:9092/updateSanctiondata/",+id,value)
// }
getSanction(id: number): Observable<Sanction> {
  alert(id)
  return this.http.get<Sanction>("http://localhost:9092/getAllSanction"+id);
}
getSanctions(id:number): Observable<Sanction> {
  alert(id)
  return this.http.get<Sanction>("http://localhost:9092/getSingleDatasanction/"+id);
}
// updateSanction(id: number, value: any): Observable<Sanction> {
//   alert("IN SER");
//   return this.http.put<Sanction>("http://localhost:9092/saveSanctionLetter"+id, value);
// }
getData() {
  return this.http.get("http://localhost:9092/getAllSanction",)
}

getSanctionLetters(arg: string) {
  return this.http.get("http://localhost:9092/getAllApplicantList"+arg)
// id(id: any, value: any) {
//   throw new Error('Method not implemented.');
}
mail(cid:number){
  alert("in mail")
  alert(cid)
  console.log(cid)
    //return this.http.post("http://localhost:9092/email-attach/"+cid,{responseType:'text'})
    return this.http.post("http://localhost:9092/mailsendSanction/"+cid,{responseType:'text'})
}

updateStudent(sanction:Sanction): Observable<Object> {
  alert("save");
  return this.http.post("http://localhost:9092/updateApplicantListdata", sanction);
}
updateSanctions(sanction:Sanction){

alert("in ser");
return this.http.put("http://localhost:9092/postSingleDataSanction", sanction);
}



 delete(id: number) {
  let headers=new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
  })

  const options = {
    headers: headers,
    body: {
      id: 1,
      name: 'test',
    },
  };
  return this.http.delete("http://localhost:9092/deleteApplicantListdata/"+id,options);
}
maill(cid:number){
  alert("in maill")
  return this.http.post("http://localhost:9092/mailsendSanction/"+cid,{responseType:'text'})
//return this.http.post("http://localhost:9092/email-attach/"+cid,{responseType:'text'})
}
appStatus(id:number): any {
  alert(id)
  return this.http.get("http://localhost:9092/api/changeStatus/"+id);
}

appStatusFailed(id:number): any {
  return this.http.get(this.baseUrl+"/changeStatusFailed/"+id);
}
getEmiCust(){
  
  return this.http.get("http://localhost:9092/getemicust");
}
getEmiCustt(status:string){
  
  return this.http.get("http://localhost:9092/getbystatuss"+status);
}
emi(id:number,date:string){
  return this.http.get(this.baseUrl+"/update/"+date+"/"+id);
}

notice(id:number){
alert("in service")
  //return this.http.post("http://localhost:9098/mailsendDefaulterer/"+id);
  return this.http.post("http://localhost:9092/mailsendDefaulterer/"+id,{responseType:'text'});
}

getDefCust(){
  return this.http.get("http://localhost:9092/getemicust");
}
// createEnquiry(enqiry: Enquiry): Observable<Object> {
//   alert("inenuiry");
//   if(enqiry.cid==0){
//     enqiry.status="enquiry"
//   }
//   else{
//     alert("inelse")
//     enqiry.status="registred"
//   }
  
//   return this.http.post("http://localhost:9092/saveEnquiry", enqiry);
// }

// updateEnquiry(id: number, value: any): Observable<Object> {
//   return this.http.put("http://localhost:9092/updatedataenq/",+id ,value);
// }

// deleteEnquiry(cid: number): Observable<any> {
//   return this.http.delete(`${this.baseUrl}/deleteenqdata/${cid}`, { responseType: 'text' });
// }
// getSanction(id){


// }

// getEnquiryList(): Observable<any> {
//   return this.http.get("http://localhost:9092/getallenqdata");
// }

// getCibil(cid:number):Observable<any> {
  
// alert("getcibil")
//   return this.http.get("http://localhost:9092/getCibilEnquiry/"+cid);
// }

// getEmiCust(){
//   alert("in get emicust")
  
//   return this.http.get("http://localhost:9092/getemicust");
//   //return this.http.get("http://localhost:9092/getEmiDetaildata/"+id);
// }

// emi(id:number){
//   alert("in emi")
//   return this.http.get("http://localhost:9092/getSingleDataEmiCustomerr/"+id);
// }
// emii(id:number,string:Date){
//   alert("in emii")
//   return this.http.get("http://localhost:9092/getSingleDataEmiCustomerr/"+Date+"/+id");
// }

// getEmi(id:number){
//   alert("in get emiservice")
//   console.log(id)
//   alert(id);
//   //return this.http.get("http://localhost:9092/getEmiDetaildata/"+id);
//   return this.http.get("http://localhost:9092/getSingleDataemidetailss/"+id);
// }
getApplicantsWithStatuss(status:string): any {
  return this.http.get("http://localhost:9092/getbystatusaplicant/"+status);
}
getSanctoin(id: number): Observable<Sanction> {
  alert(id)
  return this.http.get<Sanction>(`${this.baseUrl}/getSanction/${id}`);
}

genPdf(loanno:number):any{
  return this.http.get(this.baseUrl+"/genPdf/"+loanno,{observe:'response',responseType:'blob'});
}

genExcel(loanno:number):any{
  alert("service")
  return this.http.get(this.baseUrl+"/excel/"+loanno,{observe:'response',responseType:'blob'});

}

loanDisbs(id:number,name:string){
  alert("Success")
  return this.http.get("http://localhost:9092/saveEmiDetaildataa/"+id+"/"+name);
}

mailll(id:number){
  alert("in maill")
  //return this.http.post("http://localhost:9092/mailsendSanction/"+cid,{responseType:'text'})
//return this.http.post("http://localhost:9092/email-attach/"+cid,{responseType:'text'})
return this.http.post("http://localhost:9092/mailsendDisbursmentt/"+id,{responseType:'text'})
}
getEmi(id:number){
 
  console.log(id)
  
  //return this.http.get("http://localhost:9092/getEmiDetaildata/"+id);
  return this.http.get("http://localhost:9092/getSingleDataemidetailss/"+id);
}
getEmii(id:number,previousemistatus:string){
 
  console.log(id)
  
  //return this.http.get("http://localhost:9092/getEmiDetaildata/"+id,+previousemistatus);
  return this.http.get("http://localhost:9092/getSingleDataemidetailss/"+id);
}
emii(id:number){
  alert("in emi")
  return this.http.get("http://localhost:9092/getSingleDataEmiCustomerr/"+id);
}

}

