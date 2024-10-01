import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleState } from '../../../okh-data/user.data';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'okh-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(private router:Router){
  }

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

  navigate(path:string){
    this.router.navigate([path]);
  }
}
