import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { api_test401, api_testAdmin, api_testUser } from '../../okh-api/routes/okh.api';

@Component({
  selector: 'okh-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  constructor(private http:HttpClient){

  }

  admin(){
    let url = api_testAdmin;
    this.http.get<any>(url).subscribe({
      next: (value:any) => {
        alert(JSON.stringify(value));
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
      }
    });
  }
  user(){
    let url = api_testUser;
    this.http.get<any>(url).subscribe({
      next: (value:any) => {
        alert(JSON.stringify(value));
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
      }
    });
  }

  test401(){
    let url = api_test401;
    this.http.get<any>(url).subscribe({
      next: (value:any) => {
        alert(JSON.stringify(value));
      },
      complete: () => {
        //this.flag_wasEventsRequested = true;
      },
      error: (error) => {
        alert('SIN AUTORIZACION');
      }
    });
  }

}
