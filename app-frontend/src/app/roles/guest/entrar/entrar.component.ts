import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../okh-api/services/auth.service';
import { EntrarApi, EntrarForm } from '../../../okh-data/auth.data';
import { Router } from '@angular/router';
import { api_admin_board, api_user_board } from '../../../okh-api/routes/okh.api';

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
    this.authService.hasSession.subscribe((val)=>{this.flag_tieneSesion = val;});
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
        this.flag_fueFormEnviado = true;
        this.authService.hasSession.next(true);

        if (value.rol == 'admin') {
          this.router.navigate([api_admin_board]);
        }
        else if (value.rol == 'user') {
          this.router.navigate([api_user_board]);
        }
      },
      error: (error) => {
        this.flag_fueFormEnviado = true;
        //this.authService.hasSession.next(false); @test(add)
        this.authService.hasSession.next(true); // @test(del)
      }
    });
  }

}
