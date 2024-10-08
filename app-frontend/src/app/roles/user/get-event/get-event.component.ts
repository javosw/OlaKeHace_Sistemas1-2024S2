import { Component, Input } from '@angular/core';
import { GetEvent } from '../../../okh-data/user.data';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../okh-api/services/user.service';

@Component({
  selector: 'okh-event',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './get-event.component.html',
})
export class GetEventComponent {

  flag_quiereDenunciar: boolean = false;

  flag_addDenunciaSolicitada: boolean = false;
  flag_addDenunciaExitosa: boolean = false;

  flag_addAsistenciaSolicitada:boolean = false;
  flag_addAsistenciaExitosa: boolean = false;

  input_motivo: string = '';

  @Input() event: GetEvent = {
    id_evento: -1,
    username: '',
    nombre: '',
    lugar: '',
    fecha: '',
    hora: '',
    plazas: -1,
    plazas_ocupadas: -1,
    descripcion: '',
    url: '',
    etiquetas: ['']
  };

  addDenuncia() {
    this.flag_addDenunciaSolicitada = false;
    this.userService.addDenuncia(this.event.id_evento, this.input_motivo).subscribe({
      next: (value: any) => {
        this.flag_addDenunciaSolicitada = true;
        this.flag_addDenunciaExitosa = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_addDenunciaSolicitada = true;
        this.flag_addDenunciaExitosa = false;
      }
    });
  }

  addAsistencia(){
    this.flag_addAsistenciaSolicitada = false;
    this.userService.addAsistencia(this.event.id_evento).subscribe({
      next: (value: any) => {
        this.flag_addAsistenciaSolicitada = true;
        this.flag_addAsistenciaExitosa = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_addAsistenciaSolicitada = true;
        this.flag_addAsistenciaExitosa = false;
      }
    });
  }

  motivos: string[] = [
    'Interacciones falsas',
    'Suplantación de identidad',
    'Spam, prácticas engañosas y estafas',
    'Seguridad infantil',
    'Desnudos y contenido sexual',
    'Suicidio y autolesiones',
    'Acoso y ciberacoso',
    'Contenido dañino o peligroso',
    'Contenido peyorativo o que incita al odio o a la violencia',
    'Organizaciones criminales violentas',
    'Contenido violento o explícito',
    'Armas de fuego',
    'Comercialización de productos o servicios ilegales o regulados',
    'Lenguaje inapropiado',
    'Violencia',
    'Contenido para adultos',
    'Contenido ofensivo',
    'Actividades dañinas y contenido poco confiable',
    'Drogas recreativas y contenido relacionado con droga',
    'Contenido relacionado con armas de fuego',
    'Temas polémicos',
    'Sucesos delicados',
    'Promoción de comportamiento fraudulento',
    'Contenido inapropiado para niños y familias',
    'Contenido escandaloso y degradante',
    'Contenido relacionado con el tabac',
  ]


  toggleQuiereDenunciar(){
    this.flag_quiereDenunciar = !this.flag_quiereDenunciar;
  }
  setMotivo(motivo: string) {
    this.input_motivo = motivo;
  }

  constructor(private userService: UserService) {
  }


}
