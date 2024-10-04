import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

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
    let url = 'http://localhost:4201/admin/test';
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
    let url = 'http://localhost:4201/user/test';
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
    let url = 'http://localhost:4201/401';
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
