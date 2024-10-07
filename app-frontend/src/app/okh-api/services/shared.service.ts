import { Injectable } from '@angular/core';
import { api_SharedGetEvents } from '../routes/okh.api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GetEvent } from '../../okh-data/user.data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private router: Router) { }

  getEvents(): Observable<GetEvent[]> {
    let url = api_SharedGetEvents;
    return this.http.get<GetEvent[]>(url);
  }

}
