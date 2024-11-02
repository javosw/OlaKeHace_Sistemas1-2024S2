import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';

@Component({
  selector: 'okh-get-attendance',
  standalone: true,
  imports: [],
  templateUrl: './get-attendance.component.html',
})
export class GetAttendanceComponent {

  @Input() event: GetEvent | null = null;

  constructor() {
  }

}
