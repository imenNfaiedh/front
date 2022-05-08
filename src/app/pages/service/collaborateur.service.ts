import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collaborateur } from '../model/collaborateur';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor(private http: HttpClient) { }

   getAllCollaborateur(): Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>('http://localhost:8888/collaborateurs')
  }
  addCollaborateur(collaborateur :  any): Observable<Collaborateur> {
    return this.http.post<Collaborateur>('http://localhost:8888/collaborateurs', collaborateur);
  }

  deleteById(id:number) {
    return this.http.delete('http://localhost:8888/collaborateurs/' + id);
  }

  getCollaborateurById(id:number):Observable<Collaborateur>{
    return this.http.get<Collaborateur>('http://localhost:8888/collaborateurs/' + id);
  }
  updateCollaborateur(collaborateur :  any , id : number): Observable<Collaborateur> {
    return this.http.put<Collaborateur>('http://localhost:8888/collaborateurs/' +id, collaborateur);
  }
}
