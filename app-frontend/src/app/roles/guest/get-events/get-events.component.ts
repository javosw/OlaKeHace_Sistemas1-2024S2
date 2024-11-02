import { Component } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { GetEventComponent } from "../get-event/get-event.component";
import { GuestService } from '../../../okh-api/services/guest.service';

@Component({
  selector: 'okh-get-events',
  standalone: true,
  imports: [GetEventComponent],
  templateUrl: './get-events.component.html',
})
export class GetEventsComponent {
  constructor(private guestService: GuestService) { }

  dataEvents: GetEvent[] = new Array<GetEvent>();
  flagGetAttendancesReq: boolean = false;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.guestService.getEvents().subscribe({
      next: (value: GetEvent[]) => {
        this.dataEvents = value;
        this.flagGetAttendancesReq = true;
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
        this.flagGetAttendancesReq = true;
      }
    })
  }

}
