import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';

@Component({
  selector: 'okh-get-event',
  standalone: true,
  imports: [],
  templateUrl: './get-event.component.html',
})
export class GetEventComponent {

  @Input() event: GetEvent | null = null;

  constructor() {
  }

}
