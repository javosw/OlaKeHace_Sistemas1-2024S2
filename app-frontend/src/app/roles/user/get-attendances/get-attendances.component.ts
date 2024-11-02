import { Component } from '@angular/core';
import { UserService } from '../../../okh-api/services/user.service';
import { GetEvent } from '../../../okh-data/user.data';
import { GetEventComponent } from '../../guest/get-event/get-event.component';

@Component({
  selector: 'okh-get-attendances',
  standalone: true,
  imports: [GetEventComponent],
  templateUrl: './get-attendances.component.html',
})
export class GetAttendancesComponent {
  constructor(private userService: UserService) { }

  dataEvents: GetEvent[] = new Array<GetEvent>();
  flagGetAttendancesReq: boolean = false;

  ngOnInit() {
    this.getAttendances();
  }

  getAttendances() {
    this.userService.getAttendances().subscribe({
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
