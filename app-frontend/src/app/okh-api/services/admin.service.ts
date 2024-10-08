import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GuestService } from './guest.service';
import { Router } from '@angular/router';
import { api_AdminAddReviewRoutine, api_AdminDelComplaint, api_AdminDelEvent, api_AdminGetComplaints } from '../routes/okh.api';
import { AddConplaintReview, AddEventReview, GetComplaint } from '../../okh-data/admin.data';
import { ApiResult } from '../../okh-data/api.data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router, private authService: GuestService) { }

  getComplaints(): Observable<GetComplaint[]> {
    let url = api_AdminGetComplaints;
    return this.http.get<GetComplaint[]>(url);
  }

  addEventReview(id_event: number, eliminar: boolean): Observable<ApiResult> {
    let form: AddEventReview = { id_evento: id_event, eliminar: eliminar };

    let url = api_AdminAddReviewRoutine;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ApiResult>(url, form, { headers: headers });
  }

  addComplaintReview(id_event:number,username:string,eliminar:boolean){
    let form: AddConplaintReview = { id_evento: id_event, username: username, eliminar: eliminar };

    let url = api_AdminAddReviewRoutine;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form, { headers: headers });
  }

  delComplaint(id_event: number,username:string): Observable<ApiResult> {
    let url = api_AdminDelComplaint;
    let httpParams = new HttpParams().set('id_evento', id_event).set('username',username);
    return this.http.delete<ApiResult>(url, { params: httpParams });
  }
  delEvent(id_event: number): Observable<ApiResult> {
    let url = api_AdminDelEvent;
    let httpParams = new HttpParams().set('id_evento', id_event);
    return this.http.delete<ApiResult>(url, { params: httpParams });
  }

}
