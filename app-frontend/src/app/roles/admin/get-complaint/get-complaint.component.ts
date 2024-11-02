import { Component, Input } from '@angular/core';
import { GetComplaint } from '../../../okh-data/admin.data';
import { AdminService } from '../../../okh-api/services/admin.service';
import { RouterLink } from '@angular/router';
import { EventComponent } from "../../multi/event/event.component";

@Component({
  selector: 'okh-complaint',
  standalone: true,
  imports: [RouterLink, EventComponent],
  templateUrl: './get-complaint.component.html',
})
export class GetComplaintComponent {
  constructor(private adminService: AdminService) {
  }

  flag_delEventReq: boolean = false;
  flag_delEventOk: boolean = false;
  delEvent() {
    if (!this.complaint) { return }
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
    if (!this.complaint) { return }
    this.flag_delComplaintReq = false;
    this.flag_delComplaintOk = false;

    this.adminService.delComplaint(this.complaint.id_evento, this.complaint.denunciante).subscribe({
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

  @Input() complaint: GetComplaint | null = null;

}
