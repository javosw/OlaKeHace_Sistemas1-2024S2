import { Injectable } from '@angular/core';
import { EntrarApi, EntrarForm } from '../../okh-data/auth.data';
import { api_GuestAddUser, api_GuestEntrar, api_GuestGetUsername, api_UserGetEvents } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  flag_hasSession: BehaviorSubject<boolean>;
  data_session: EntrarApi = {username:'',rol:''};

  constructor(private http: HttpClient, private router: Router) {
    this.flag_hasSession = new BehaviorSubject(false);
  }

  addSession(form: EntrarForm):Observable<EntrarApi> {
    let url: string = api_GuestEntrar;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarApi>(url, form, {headers:httpHeaders});
  }

  getUsername(form:{username:string}):Observable<any>{
    let url: string = api_GuestGetUsername;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarApi>(url, form, {headers:httpHeaders});
  }

  addUser(form:EntrarForm):Observable<any>{
    let url: string = api_GuestAddUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<EntrarApi>(url, form, {headers:httpHeaders});

  }
}
