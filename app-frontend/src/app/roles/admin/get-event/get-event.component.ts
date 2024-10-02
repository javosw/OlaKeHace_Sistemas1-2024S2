import { Component, Input } from '@angular/core';
import { AdminService } from '../../../okh-api/services/admin.service';
import { GetEvent } from '../../../okh-data/user.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'okh-event',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-event.component.html',
})
export class GetEventComponent {
  constructor(private adminService: AdminService) {
  }

  flag_addReviewSolicitada:boolean = false;
  flag_addReviewExitoso:boolean = false;

  addReview(eliminar:boolean){
    this.flag_addReviewSolicitada = false;
    this.flag_addReviewExitoso = false;

    this.adminService.addDenuncia(this.event.id_evento,eliminar).subscribe({
      next: (value: any) => {
        this.flag_addReviewSolicitada = true;
        this.flag_addReviewExitoso = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_addReviewSolicitada = true;
        this.flag_addReviewExitoso = false;
      }
    });
  }

  @Input() event: GetEvent = {
    id_evento: -1,
    nombre: '',
    lugar: '',
    fecha: '',
    hora: '',
    plazas: -1,
    plazas_ocupadas: -1,
    descripcion: '',
    url: '',
    etiquetas: ['']
  };


}
