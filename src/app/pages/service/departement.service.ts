import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../model/departement';



@Injectable({
  providedIn: 'root'
})
export class DepartementService {


  constructor(private http: HttpClient) { }
  
   getAllDepartement(): Observable<Departement[]> {
    return this.http.get<Departement[]>('http://localhost:8888/departements')}
  
    addDepartement(departement :  any): Observable<Departement> {
      return this.http.post<Departement>('http://localhost:8888/departements', departement);
    }
  
    deleteById(id:number) {
      return this.http.delete('http://localhost:8888/departements/' + id);
    }
  
    updateDepartement(departement :  any , id : number): Observable<Departement> {
      return this.http.put<Departement>('http://localhost:8888/departements/' +id, departement);
    }
  
    getDepartementById(id:number):Observable<Departement>{
  
      return this.http.get<Departement>('http://localhost:8888/departements/' + id);
    }
  
  
   
  

  
  }
