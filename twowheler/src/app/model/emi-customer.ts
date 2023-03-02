import { Emi } from "./emi";
import { Ledger } from "./ledger";

export class EmiCustomer {
    cusid:number;
	name:string;
	sanctionAmount:number;
    rateofInt:number ;
    tenure:number;
    emailid:string;
	ledger:Ledger[];
    emiDetails:Emi[];
}
