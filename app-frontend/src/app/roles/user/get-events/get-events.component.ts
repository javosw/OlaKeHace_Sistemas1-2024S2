import { Component } from '@angular/core';
import { UserService } from '../../../okh-api/services/user.service';
import { GetEvent } from '../../../okh-data/user.data';
import { GetEventComponent } from "../get-event/get-event.component";

@Component({
  selector: 'okh-get-events',
  standalone: true,
  imports: [GetEventComponent],
  templateUrl: './get-events.component.html',
})
export class GetEventsComponent {

  constructor(private userService:UserService){}

  data_events = new Array<GetEvent>();
  flag_wasEventsRequested: boolean  = false;


  ngOnInit(){
    this.getEvents();
  }



  getEvents(){
    this.userService.getEvents().subscribe({
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
