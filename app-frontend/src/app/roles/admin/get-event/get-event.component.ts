import { Component, Input } from '@angular/core';
import { AdminService } from '../../../okh-api/services/admin.service';
import { GetEvent } from '../../../okh-data/user.data';
import { RouterLink } from '@angular/router';
import { EventComponent } from "../../multi/event/event.component";

@Component({
  selector: 'okh-get-event',
  standalone: true,
  imports: [RouterLink, EventComponent],
  templateUrl: './get-event.component.html',
})
export class GetEventComponent {
  constructor(private adminService: AdminService) {
  }

  flag_addReviewSolicitada: boolean = false;
  flag_addReviewExitoso: boolean = false;

  addEventReview(eliminar: boolean) {
    if (!this.event) { return; }
    this.flag_addReviewSolicitada = false;
    this.flag_addReviewExitoso = false;

    this.adminService.addEventReview(this.event.id_evento, eliminar).subscribe({
      next: (value: any) => {
        this.flag_addReviewSolicitada = true;
        this.flag_addReviewExitoso = true;
      },
      complete: () => {
      },
      error: (error: any) => {
        this.flag_addReviewSolicitada = true;
        this.flag_addReviewExitoso = false;
      }
    });
  }

  @Input() event: GetEvent | null = null;


}
