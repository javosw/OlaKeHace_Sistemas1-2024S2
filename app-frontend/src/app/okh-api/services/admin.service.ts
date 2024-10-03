import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  getEvents(): Observable<GetEvent[]> {
    return of(this.events);

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
