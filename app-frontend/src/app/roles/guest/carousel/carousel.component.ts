import { Component } from '@angular/core';

@Component({
  selector: 'okh-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styles: `
  .carousel-item img {
    max-height: 400px;
    width: 100%;
    object-fit: contain;
  }
  `
})
export class CarouselComponent {

}
