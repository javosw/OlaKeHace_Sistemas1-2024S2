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

  flag_delEventReq: boolean = false;
  flag_delEventOk: boolean = false;
  delEvent() {
    this.flag_delEventReq = false;
    this.flag_delEventOk = false;

    this.adminService.delEvent(this.complaint.id_evento).subscribe({
      next: (value: any) => {
        this.flag_delEventReq = true;
        this.flag_delEventOk = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_delEventReq = true;
        this.flag_delEventOk = false;
      }
    });
  }

  flag_delComplaintReq: boolean = false;
  flag_delComplaintOk: boolean = false;
  delComplaint() {
    this.flag_delComplaintReq = false;
    this.flag_delComplaintOk = false;

    this.adminService.delComplaint(this.complaint.id_evento, this.complaint.username).subscribe({
      next: (value: any) => {
        this.flag_delComplaintReq = true;
        this.flag_delComplaintOk = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_delComplaintReq = true;
        this.flag_delComplaintOk = false;
      }
    });
  }

  @Input() complaint: GetComplaint = {
    id_evento: -1,
    username: '',
    motivo: '',
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
