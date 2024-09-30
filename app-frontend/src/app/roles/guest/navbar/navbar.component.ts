import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'okh-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Output() quiereEntrar = new EventEmitter<boolean>;

  emitQuiereEntrar(decicion:boolean){
    this.quiereEntrar.emit(decicion);
  }

}
