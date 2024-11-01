import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'okh-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  @Output() currentView = new EventEmitter<string>;

  setCurrentView(view: 'hi' | 'events' | 'client-session' | 'admin-session' | 'add-client') {
    this.currentView.emit(view);
  }

}
