import { Injectable } from '@angular/core';
import { EntrarData, EntrarPorRol, SessionForm } from '../../okh-data/guest.data';
import { api_GuestAddUser, api_GuestEntrar, api_GuestGetUser, api_SharedGetEvents } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  flag_hasSession: BehaviorSubject<boolean>;
  data_session: EntrarData = {username:''};

  constructor(private http: HttpClient, private router: Router) {
    this.flag_hasSession = new BehaviorSubject(false);
  }

  addUserSession(username:string,password:string):Observable<EntrarData> {
    let url: string = api_GuestEntrar;
    let form:EntrarPorRol = {username,password,rol:'user'};
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarData>(url, form, {headers:httpHeaders});
  }

  addAdminSession(username:string,password:string):Observable<EntrarData> {
    let url: string = api_GuestEntrar;
    let form:EntrarPorRol = {username,password,rol:'admin'};
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarData>(url, form, {headers:httpHeaders});
  }

  getUser(username:string):Observable<any>{
    let form = {username:username};
    let url: string = api_GuestGetUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarData>(url, form, {headers:httpHeaders});
  }

  addUser(form:SessionForm):Observable<any>{
    let url: string = api_GuestAddUser;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post<EntrarData>(url, form, {headers:httpHeaders});

  }
}
