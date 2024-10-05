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

      let constr401:boolean = error.status == 401;
      let constrUser:boolean = req.url != api_GuestEntrar;
      if (constr401 && constrUser) {
        router.navigate(['/']);
        auth.flag_hasSession.next(false);
      }

      return throwError(() => error);
    })
  );


  //return next(req);
};
