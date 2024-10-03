import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { GuestService } from '../services/guest.service';
import { api_GuestEntrar } from '../routes/okh.api';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let router: Router = inject(Router);
  let auth: GuestService = inject(GuestService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401 && req.url !== api_GuestEntrar) {
        router.navigate(['entrar']);
        //auth.hasSession.next(false); @test(add)
        auth.flag_hasSession.next(true); // @test(del)
      }

      return throwError(() => error);
    })
  );


  //return next(req);
};
