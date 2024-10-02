import { Component } from '@angular/core';
import { AddEvent } from '../../../okh-data/user.data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'okh-add-event',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-event.component.html',
})
export class AddEventComponent {

  addEvent() {
    this.getHashtags();
    alert(JSON.stringify(this.input_event));
  }

  extractHashtags = (text: string): string[] => {
    const regex = /#[a-zA-Z0-9_]+/g;
    const hashtags = text.match(regex) || [];
    return hashtags ? hashtags.map(hashtag => hashtag.slice(1)) : [];
  };

  getHashtags() {
    this.input_event.etiquetas = this.extractHashtags(this.input_etiquetas);
  }

  input_etiquetas:string = '';

  input_event: AddEvent = {
    nombre: '',
    lugar: '',
    fecha: '',
    hora: '',
    plazas: -1,
    descripcion: '',
    url: '',
    etiquetas: ['']
  };
}
