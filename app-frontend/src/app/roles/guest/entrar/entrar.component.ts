import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../okh-api/services/auth.service';
import { EntrarApi, EntrarForm } from '../../../okh-data/auth.data';
import { Router } from '@angular/router';
import { path_AdminBoard, path_UserBoard } from '../../../okh-meta/paths';

@Component({
  selector: 'okh-entrar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './entrar.component.html',
})
export class EntrarComponent {
  form_entrar: FormGroup;
  flag_tieneSesion: boolean = false;
  flag_fueFormEnviado: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router:Router) {
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

    this.authService.addSession(this.form_entrar.value as EntrarForm).subscribe({
      next: (value: EntrarApi) => {
        this.authService.data_session = value;
        this.flag_fueFormEnviado = true;
        this.authService.flag_hasSession.next(true);

        if (value.rol == 'admin') {
          this.router.navigate([path_AdminBoard]);
        }
        else if (value.rol == 'user') {
          this.router.navigate([path_UserBoard]);
        }
      },
      error: (error) => {
        this.flag_fueFormEnviado = true;
        //this.authService.hasSession.next(false); @test(add)
        this.authService.flag_hasSession.next(true); // @test(del)
      }
    });
  }

}
