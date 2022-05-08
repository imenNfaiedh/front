import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

   getAllClient(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8888/clients')
  }
  addClient(client :  any): Observable<Client> {
    return this.http.post<Client>('http://localhost:8888/clients', client);
  }

  deleteById(id:number) {
    return this.http.delete('http://localhost:8888/clients/' + id);
  }

  updateClient(client :  any , id : number): Observable<Client> {
    return this.http.put<Client>('http://localhost:8888/clients/' +id, client);
  }

  getClientById(id:number):Observable<Client>{

    return this.http.get<Client>('http://localhost:8888/clients/' + id);
  }


 

}
