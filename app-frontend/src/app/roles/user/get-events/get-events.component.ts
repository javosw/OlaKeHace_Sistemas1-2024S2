import { Component } from '@angular/core';
import { UserService } from '../../../okh-api/services/user.service';
import { GetEvent } from '../../../okh-data/user.data';
import { GetEventComponent } from "../get-event/get-event.component";
import { SharedService } from '../../../okh-api/services/shared.service';

@Component({
  selector: 'okh-get-events',
  standalone: true,
  imports: [GetEventComponent],
  templateUrl: './get-events.component.html',
})
export class GetEventsComponent {

  constructor(private sharedService:SharedService){}

  data_events = new Array<GetEvent>();
  flag_wasEventsRequested: boolean  = false;


  ngOnInit(){
    this.getEvents();
  }

  getEvents(){
    this.sharedService.getEvents().subscribe({
      next: (value: GetEvent[]) => {
        this.data_events = value;
        this.flag_wasEventsRequested = true;
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
        this.flag_wasEventsRequested = true;
      }
    })
  }

}
