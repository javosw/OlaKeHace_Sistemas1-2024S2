import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { AddUserComponent } from "../add-user/add-user.component";
import { UserEntrarComponent } from '../entrar-user/user-entrar.component';
import { AdminEntrarComponent } from '../entrar-admin/admin-entrar.component';
import { GetEventsComponent } from '../get-events/get-events.component';

@Component({
  selector: 'okh-hola',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, AddUserComponent, UserEntrarComponent, AdminEntrarComponent, GetEventsComponent],
  templateUrl: './hola.component.html',
})
export class HolaComponent {
  flagCurrentView: string = 'hi';

  constructor() {
  }

}
