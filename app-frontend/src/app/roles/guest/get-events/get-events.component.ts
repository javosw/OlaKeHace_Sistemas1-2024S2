import { Component } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { SharedService } from '../../../okh-api/services/shared.service';
import { GetEventComponent } from "../get-event/get-event.component";

@Component({
  selector: 'okh-get-events',
  standalone: true,
  imports: [GetEventComponent],
  templateUrl: './get-events.component.html',
})
export class GetEventsComponent {
  constructor(private sharedService: SharedService) { }

  dataEvents: GetEvent[] = new Array<GetEvent>();
  flagGetAttendancesReq: boolean = false;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.sharedService.getEvents().subscribe({
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
