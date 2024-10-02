import { Injectable } from '@angular/core';
import { api_UserAddAttendance, api_UserAddComplaint, api_UserGetEvents } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AddComplaint, AddEventTo, GetEvent } from '../../okh-data/user.data';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) { }

  events = [
    {
      id_evento: 5,
      nombre: 'Aniversario CUNOC',
      lugar: 'CUNOC',
      fecha: '2020-02-02',
      hora: '15:40',
      plazas: 100,
      plazas_ocupadas: 48,
      descripcion: 'fiesta del cunoc',
      url: 'cunoc.edu.gt',
      etiquetas: ['ingenieria','medicina','psicologia','derecho']
    },
    {
      id_evento: 5,
      nombre: 'XELAFER 2024',
      lugar: 'Parque Central, Xela',
      fecha: '2020-02-02',
      hora: '15:40',
      plazas: 15000,
      plazas_ocupadas: 14000,
      descripcion: 'fiesta de guatemala',
      url: 'xela.gt',
      etiquetas: ['independencia','bandas','feria','cerveza']
    },
    {
      id_evento: 5,
      nombre: 'Convivio CUNOC',
      lugar: 'CUNOC',
      fecha: '2020-02-02',
      hora: '15:40',
      plazas: 100,
      plazas_ocupadas: 48,
      descripcion: 'convivio del cunoc',
      url: 'cunoc.edu.gt',
      etiquetas: ['ingenieria','medicina','psicologia','derecho']
    },
    {
      id_evento: 5,
      nombre: 'Congreso Ingenieria 2024',
      lugar: 'CUNOC',
      fecha: '2020-02-02',
      hora: '15:40',
      plazas: 100,
      plazas_ocupadas: 48,
      descripcion: 'congreso de ingenieria',
      url: 'cunoc.edu.gt',
      etiquetas: ['ingenieria','sistemas','mecanica','industrial','civil','tecnologia']
    },
  ]

  addDenuncia(id_event:number,argumento:string):Observable<any>{
    let form:AddComplaint = { id_evento: id_event, argumento: argumento };

    let url = api_UserAddComplaint;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url,form,{headers:headers});
  }

  addAsistencia(id_event:number):Observable<any>{
    let form:AddEventTo = { id_evento: id_event };

    let url = api_UserAddAttendance;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url,form,{headers:headers});
  }

  getEvents(): Observable<GetEvent[]> {
    return of(this.events);

    // ++++++++++++++++++++++++++++++++++++++++
    let url = api_UserGetEvents;
    return this.http.get<GetEvent[]>(url);
  }

}
