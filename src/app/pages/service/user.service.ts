import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getAllUser(): Observable<User[]> {
   return this.http.get<User[]>('http://localhost:8888/users')
 }
 addUser(user :  any): Observable<User> {
   return this.http.post<User>('http://localhost:8888/users', user);
 }

 deleteById(id:number) {
   return this.http.delete('http://localhost:8888/users/' + id);
 }

 updateUser(user :  any , id : number): Observable<User> {
   return this.http.put<User>('http://localhost:8888/users/' +id, user);
 }

 getUserById(id:number):Observable<User>{

   return this.http.get<User>('http://localhost:8888/users/' + id);
 }






}
