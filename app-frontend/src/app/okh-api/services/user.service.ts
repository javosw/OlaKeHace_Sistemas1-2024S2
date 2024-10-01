import { Injectable } from '@angular/core';
import { api_UserGetEvents } from '../routes/okh.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { GetEvent } from '../../okh-data/user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }


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
    let url = api_UserGetEvents;
    return this.http.get<GetEvent[]>(url);
  }

}
