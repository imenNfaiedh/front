import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';
@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

getAllMission(): Observable<Mission[]> {
   return this.http.get<Mission[]>('http://localhost:8888/missions')
 }

addMission(mission :  any): Observable<Mission> {
  return this.http.post<Mission>('http://localhost:8888/missions', mission);
}
deleteById(id:number) {
  return this.http.delete('http://localhost:8888/missions/' + id);
}
getMissionById(id:number):Observable<Mission>{
  return this.http.get<Mission>('http://localhost:8888/missions/' + id);
}
updateMission(mission :  any , id : number): Observable<Mission> {
  return this.http.put<Mission>('http://localhost:8888/missions/' +id, mission);
}

}
