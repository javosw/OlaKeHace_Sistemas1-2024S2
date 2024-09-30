import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HolaComponent } from '../roles/guest/hola/hola.component';
import { AuthService } from '../okh-api/services/auth.service';

@Component({
  selector: 'okh',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HolaComponent],
  templateUrl: './okh.component.html',
})
export class OkhComponent {
  tieneSesion: boolean;

  constructor(private auth: AuthService) {
    this.tieneSesion = this.auth.tieneSesion.value;
  }

  ngOnInit(){
    this.auth.tieneSesion.subscribe((val)=>{this.tieneSesion = val;});
  }

}