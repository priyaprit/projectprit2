import { Accountdetails } from "./accountdetails";
import { Carinfo } from "./carinfo";
import { Cibil } from "./cibil";
import { Currentloandetails } from "./currentloandetails";
import { CustomerAddress } from "./customer-address";
import { Educationdetails } from "./educationdetails";
import { Garantordetails } from "./garantordetails";
import { Previousloan } from "./previousloan";
import { Profession } from "./profession";
import { Sanction } from "./sanction";

export class Customer {
cid:number;
cname:String;
age:number;
emailid:string;
status:string;
carinfo:Carinfo[];
accdetails:Accountdetails[];
edudetails:Educationdetails[];	
profession:Profession[];
customeraddress:CustomerAddress[];
cibil:Cibil[]; 
currentloan:Currentloandetails[];
previousloan:Previousloan[];
garantordetails:Garantordetails[];
sanction:Sanction[]
  }


