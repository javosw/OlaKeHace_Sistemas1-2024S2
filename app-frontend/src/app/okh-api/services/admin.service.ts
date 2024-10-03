import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GuestService } from './guest.service';
import { Router } from '@angular/router';
import { api_AdminAddReviewRoutine, api_AdminGetComplaints, api_AdminGetEvents } from '../routes/okh.api';
import { GetEvent } from '../../okh-data/user.data';
import { AddConplaintReview, AddEventReview, GetComplaint } from '../../okh-data/admin.data';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private router: Router, private authService: GuestService) { }
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
      etiquetas: ['ingenieria', 'medicina', 'psicologia', 'derecho']
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
      etiquetas: ['independencia', 'bandas', 'feria', 'cerveza']
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
      etiquetas: ['ingenieria', 'medicina', 'psicologia', 'derecho']
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
      etiquetas: ['ingenieria', 'sistemas', 'mecanica', 'industrial', 'civil', 'tecnologia']
    },
  ]


  complaints: GetComplaint[] = [
    {
      username: 'cangrejo',
      motivo: 'mucho dinero',
      event: {
        id_evento: 5,
        nombre: 'Aniversario CUNOC',
        lugar: 'CUNOC',
        fecha: '2020-02-02',
        hora: '15:40',
        plazas: 100,
        plazas_ocupadas: 48,
        descripcion: 'fiesta del cunoc',
        url: 'cunoc.edu.gt',
        etiquetas: ['ingenieria', 'medicina', 'psicologia', 'derecho']
      }
    },
    {
      username: 'patricio',
      motivo: 'no hay espageti',
      event: {
        id_evento: 5,
        nombre: 'XELAFER 2024',
        lugar: 'Parque Central, Xela',
        fecha: '2020-02-02',
        hora: '15:40',
        plazas: 15000,
        plazas_ocupadas: 14000,
        descripcion: 'fiesta de guatemala',
        url: 'xela.gt',
        etiquetas: ['independencia', 'bandas', 'feria', 'cerveza']
      }
    },
    {
      username: 'esponja',
      motivo: 'no me dejan entrar',
      event: {
        id_evento: 5,
        nombre: 'Convivio CUNOC',
        lugar: 'CUNOC',
        fecha: '2020-02-02',
        hora: '15:40',
        plazas: 100,
        plazas_ocupadas: 48,
        descripcion: 'convivio del cunoc',
        url: 'cunoc.edu.gt',
        etiquetas: ['ingenieria', 'medicina', 'psicologia', 'derecho']
      }
    },
    {
      username: 'calamardo',
      motivo: 'invitaron a esponja',
      event: {
        id_evento: 5,
        nombre: 'Congreso Ingenieria 2024',
        lugar: 'CUNOC',
        fecha: '2020-02-02',
        hora: '15:40',
        plazas: 100,
        plazas_ocupadas: 48,
        descripcion: 'congreso de ingenieria',
        url: 'cunoc.edu.gt',
        etiquetas: ['ingenieria', 'sistemas', 'mecanica', 'industrial', 'civil', 'tecnologia']
      }
    },
  ]

  getEvents(): Observable<GetEvent[]> {
    return of(this.events);

    // ++++++++++++++++++++++++++++++++++++++++
    let url = api_AdminGetEvents;
    return this.http.get<GetEvent[]>(url);
  }

  getComplaints(): Observable<GetComplaint[]> {
    return of(this.complaints);
    // ++++++++++++++++++++++++++++++++++++++++
    let url = api_AdminGetComplaints;
    return this.http.get<GetComplaint[]>(url);
  }

  addEventReview(id_event: number, eliminar: boolean): Observable<any> {
    let form: AddEventReview = { id_evento: id_event, eliminar: eliminar };

    let url = api_AdminAddReviewRoutine;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form, { headers: headers });
  }

  addComplaintReview(id_event:number,username:string,eliminar:boolean){
    let form: AddConplaintReview = { id_evento: id_event, username: username, eliminar: eliminar };

    let url = api_AdminAddReviewRoutine;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, form, { headers: headers });
  }

}
