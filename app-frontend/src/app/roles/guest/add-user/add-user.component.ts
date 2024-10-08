import { Component } from '@angular/core';
import { EntrarPorRol, SessionForm } from '../../../okh-data/guest.data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestService } from '../../../okh-api/services/guest.service';

@Component({
  selector: 'okh-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  constructor(private guestService:GuestService){
  }

  form_addUser:SessionForm = { username:'',password:'' }

  flag_getUserOk:boolean = false;
  flag_getUserReq:boolean = false;

  getUser(){
    this.flag_getUserReq = false;
    this.flag_getUserOk = false;

    this.guestService.getUser(this.form_addUser.username).subscribe({
      next: (value: any) => {
        this.flag_getUserOk = true;
        this.flag_getUserReq = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_getUserOk = false;
        this.flag_getUserReq = true;
      }
    });
  }

  flag_addUserReq:boolean = false;
  flag_addUserOk:boolean = false;

  addUser(){
    this.flag_addUserReq = false;
    this.flag_addUserOk = false;

    this.guestService.addUser(this.form_addUser).subscribe({
      next: (value: any) => {
        this.flag_addUserOk = true;
        this.flag_addUserReq = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.flag_addUserOk = false;
        this.flag_addUserReq = true;
      }
    });
  }
}
