import { Component } from '@angular/core';
import { EntrarForm } from '../../../okh-data/auth.data';
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

  user:EntrarForm = { username:'',password:'' }

  username_is_available:boolean = false;
  requested_username:boolean = false;

  requested_add_user:boolean = false;
  user_was_added:boolean = false;

  getUsername(){
    this.requested_username = false;
    this.username_is_available = false;

    this.guestService.getUsername({username:this.user.username}).subscribe({
      next: (value: any) => {
        this.username_is_available = true;
        this.requested_username = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.username_is_available = false;
        this.requested_username = true;
      }
    });
  }

  addUser(){
    this.requested_add_user = false;
    this.user_was_added = false;

    this.guestService.addUser(this.user).subscribe({
      next: (value: any) => {
        this.user_was_added = true;
        this.requested_add_user = true;
      },
      complete: () => {
      },
      error: (error) => {
        this.user_was_added = false;
        this.requested_add_user = true;
      }
    });
  }
}
