import { Client } from "./client";
import { Collaborateur } from "./collaborateur";

export class Mission{
    id ? : number;
    name  ? : String;
	dateDebut ?: Date  ;
	 dateFin ? : Date ;
	 localisation ? : String;
	 nbHeurs ? : number;
	 
	 client? : Client;
	 collaborateur? : Collaborateur;

	
}