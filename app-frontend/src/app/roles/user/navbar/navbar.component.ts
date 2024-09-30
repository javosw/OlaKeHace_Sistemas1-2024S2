import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleState } from '../../../okh-data/user.data';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'okh-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  flag_actual:ToggleState = { state: false };

  flag_getEventos: ToggleState = { state: false };
  flag_addEvento: ToggleState = { state: false };
  flag_getNotifs: ToggleState = { state: false };

  ngOnInit(){
    this.toggleActive(this.flag_getEventos);
  }

  toggleActive(toggle: ToggleState) {
    this.flag_actual.state = false;
    toggle.state = true;
    this.flag_actual = toggle;
  }

}
