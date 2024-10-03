import { Component, Input } from '@angular/core';
import { GetComplaint } from '../../../okh-data/admin.data';
import { AdminService } from '../../../okh-api/services/admin.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'okh-complaint',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-complaint.component.html',
})
export class GetComplaintComponent {
  constructor(private adminService: AdminService) {
  }

  flag_addReviewSolicitada: boolean = false;
  flag_addReviewExitoso: boolean = false;

  addComplaintReview(eliminar: boolean) {
    this.flag_addReviewSolicitada = false;
    this.flag_addReviewExitoso = false;

    this.adminService.addComplaintReview(this.complaint.event.id_evento, this.complaint.username, eliminar).subscribe({
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

  @Input() complaint: GetComplaint = {
    username: '',
    motivo: '',
    event: {
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
    }
  };

}
