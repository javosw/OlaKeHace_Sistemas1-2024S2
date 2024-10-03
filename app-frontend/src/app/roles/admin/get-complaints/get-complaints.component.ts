import { Component } from '@angular/core';
import { AdminService } from '../../../okh-api/services/admin.service';
import { GetComplaint } from '../../../okh-data/admin.data';
import { GetComplaintComponent } from '../get-complaint/get-complaint.component';

@Component({
  selector: 'okh-get-complaints',
  standalone: true,
  imports: [GetComplaintComponent],
  templateUrl: './get-complaints.component.html',
})
export class GetComplaintsComponent {
  constructor(private adminService:AdminService){}

  data_complaints = new Array<GetComplaint>();
  flag_requestedComplaints: boolean  = false;


  ngOnInit(){
    this.getEvents();
  }

  getEvents(){
    this.adminService.getComplaints().subscribe({
      next: (value: GetComplaint[]) => {
        this.data_complaints = value;
        this.flag_requestedComplaints = true;
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
        this.flag_requestedComplaints = true;
      }
    })
  }


}
