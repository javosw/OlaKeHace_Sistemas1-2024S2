import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { EntrarComponent } from "../entrar/entrar.component";
import { AddUserComponent } from "../add-user/add-user.component";

@Component({
  selector: 'okh-hola',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, EntrarComponent, AddUserComponent],
  templateUrl: './hola.component.html',
})
export class HolaComponent {
  flag_view:string = 'hola';

  constructor() {
  }

}
