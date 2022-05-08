import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  
  getAllManager(): Observable<Manager[]> {
   return this.http.get<Manager[]>('http://localhost:8888/managers')
 }


 addManager(manager :  any): Observable<Manager> {
  return this.http.post<Manager>('http://localhost:8888/managers', manager);
}

deleteById(id:number) {
  return this.http.delete('http://localhost:8888/managers/' + id);
}
getManagerById(id:number):Observable<Manager>{
  return this.http.get<Manager>('http://localhost:8888/managers/' + id);
}
updateManager(manager :  any , id : number): Observable<Manager> {
  return this.http.put<Manager>('http://localhost:8888/managers/' +id, manager);
}
}
