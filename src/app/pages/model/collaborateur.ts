import { Departement } from "./departement";

export class Collaborateur {

        id ? : number;
	    firstName ? : string;
	    lastName  ? : string ;
	    telephone ?: any;
	    email ?:string;
	    grade ?: string;
		dateNaiss ?: Date;
        cin ? : number;
        numPasseport ? : number;
        nationalite ? : string;
        address ? : string ;
        pays ? : string;
   
        gouvernerat ? : string ; 
        codePostal ? : number;
        departement?: Departement;







}