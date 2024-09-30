import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from "../carousel/carousel.component";
import { EntrarComponent } from "../entrar/entrar.component";

@Component({
  selector: 'okh-hola',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, EntrarComponent],
  templateUrl: './hola.component.html',
})
export class HolaComponent {
  flag_quiereEntrar:boolean = false;

  constructor() {
  }

}
