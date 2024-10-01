import { Injectable } from '@angular/core';
import { EntrarApi, EntrarForm } from '../../okh-data/auth.data';
import { api_entrar, api_UserGetEvents } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetEvent } from '../../okh-data/user.data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  hasSession: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.hasSession = new BehaviorSubject(false);
  }

  addSession(form: EntrarForm):Observable<EntrarApi> {
    let url: string = api_entrar;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarApi>(url, form,{headers:httpHeaders});
  }

}
