import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'okh-board',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  
  constructor(private router: Router) {
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  okh_routes = {

  }
}
