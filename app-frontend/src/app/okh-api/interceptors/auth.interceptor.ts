import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { api_entrar } from '../routes/okh.api';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let router: Router = inject(Router);
  let auth: AuthService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401 && req.url !== api_entrar) {
        router.navigate(['entrar']);
        //auth.hasSession.next(false); @test(add)
        auth.flag_hasSession.next(true); // @test(del)
      }

      return throwError(() => error);
    })
  );


  //return next(req);
};
