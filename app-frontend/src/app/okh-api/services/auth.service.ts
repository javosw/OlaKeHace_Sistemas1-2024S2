import { Injectable } from '@angular/core';
import { EntrarApi, EntrarForm } from '../../okh-data/auth.data';
import { api_admin_board, api_entrar, api_user_board } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tieneSesion: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.tieneSesion = new BehaviorSubject(false);
  }

  addSession(form: EntrarForm):Observable<EntrarApi> {
    let url: string = api_entrar;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<EntrarApi>(url, form,{headers:httpHeaders});
  }
}