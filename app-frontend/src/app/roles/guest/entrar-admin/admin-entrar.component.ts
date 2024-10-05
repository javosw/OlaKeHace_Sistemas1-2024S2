import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GuestService } from '../../../okh-api/services/guest.service';
import { EntrarData, EntrarForm, EntrarPorRol } from '../../../okh-data/guest.data';
import { Router } from '@angular/router';
import { path_AdminBoard, path_UserBoard } from '../../../okh-meta/paths';

@Component({
  selector: 'okh-entrar-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-entrar.component.html',
})
export class AdminEntrarComponent {
  form_entrar: FormGroup;
  flag_tieneSesion: boolean = false;
  flag_fueFormEnviado: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService:GuestService, private router:Router) {
    this.authService.flag_hasSession.subscribe((val)=>{this.flag_tieneSesion = val;});
    this.form_entrar = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
  // Replacing a form control value
  // this.formControl1.setValue('my value');
  // entrarForm = new FormGroup({ user: new FormControl(''), password: new FormControl('') });

  onSubmit() {
    this.flag_fueFormEnviado = false;
    let form:EntrarForm = this.form_entrar.value as EntrarForm;

    this.authService.addAdminSession(form.username,form.password).subscribe({
      next: (value: EntrarData) => {
        this.authService.data_session = value;
        this.flag_fueFormEnviado = true;
        this.authService.flag_hasSession.next(true);

        this.router.navigate([path_AdminBoard]);
      },
      error: (error) => {
        this.flag_fueFormEnviado = true;
        this.authService.flag_hasSession.next(false);
      }
    });
  }

}
