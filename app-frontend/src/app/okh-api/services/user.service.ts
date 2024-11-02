import { Injectable } from '@angular/core';
import { api_UserAddAttendance, api_UserAddComplaint, api_UserAddEvent, api_SharedGetEvents, api_UserGetAttendances } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AddComplaint, AddEvent, AddEventTo, GetEvent } from '../../okh-data/user.data';
import { GuestService } from './guest.service';
import { ApiResult } from '../../okh-data/api.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private authService: GuestService) { }

  addDenuncia(id_event: number, motivo: string): Observable<any> {
    let form: AddComplaint = { id_evento: id_event, motivo: motivo };

    let url = api_UserAddComplaint;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form, { headers: headers });
  }

  addAsistencia(id_event: number): Observable<any> {
    let form: AddEventTo = { id_evento: id_event };

    let url = api_UserAddAttendance;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form, { headers: headers });
  }

  addEvent(form: AddEvent) {
    let url: string = api_UserAddEvent;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<ApiResult>(url, form, { headers: httpHeaders });
  }

  getAttendances() {
    let url = api_UserGetAttendances;
    return this.http.get<GetEvent[]>(url);
  }

}
