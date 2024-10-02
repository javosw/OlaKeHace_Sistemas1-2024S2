import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { api_AdminAddReviewRoutine, api_AdminGetEvents } from '../routes/okh.api';
import { GetEvent } from '../../okh-data/user.data';
import { AddReviewRoutine } from '../../okh-data/admin.data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) { }

  getEvents(): Observable<GetEvent[]> {
    // ++++++++++++++++++++++++++++++++++++++++
    let url = api_AdminGetEvents;
    return this.http.get<GetEvent[]>(url);
  }

  addDenuncia(id_event:number,was_deleted:boolean):Observable<any>{
    let form:AddReviewRoutine = { id_evento: id_event, fue_eliminado: was_deleted };

    let url = api_AdminAddReviewRoutine;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url,form,{headers:headers});
  }

  /*

  addAsistencia(id_event:number):Observable<any>{
    let form:AddEventTo = { id_evento: id_event };

    let url = api_UserAddAttendance;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url,form,{headers:headers});
  }
*/
}
