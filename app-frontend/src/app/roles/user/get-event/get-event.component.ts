import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'okh-event',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-event.component.html',
})
export class GetEventComponent {


  @Input() event:GetEvent = {
    id_evento: -1,
    nombre: '',
    lugar: '',
    fecha: '',
    hora: '',
    plazas: -1,
    plazas_ocupadas: -1,
    descripcion: '',
    url: '',
    etiquetas:['']
  };

}
