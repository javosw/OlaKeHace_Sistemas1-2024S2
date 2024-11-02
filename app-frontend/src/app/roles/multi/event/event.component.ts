import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'okh-event',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event.component.html',
})
export class EventComponent {
  @Input() event: GetEvent | null = null;

  constructor() {
  }

}
