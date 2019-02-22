import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import * as fromAction from '../actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  signIn$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.SIGN_IN),
    switchMap((action: fromAction.SignIn) => {
      const { username, password } = action.payload;
      return this.authService.authenticateUser(username, password).pipe(
        map(result => new fromAction.SignInSuccess({ ...result })),
        catchError(err => of(new fromAction.SignInFailure()))
      );
    })
  );

  @Effect()
  resumeSession$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.RESUME_SESSION),
    switchMap(() => {
      if (!this.authService.isSignedIn()) {
        return of(new fromAction.ResumeSessionFailure());
      }
      return this.authService.resumeCurrentSession().pipe(
        map(result => new fromAction.ResumeSessionSuccess(result)),
        catchError(err => of(new fromAction.ResumeSessionFailure()))
      );
    })
  );

  @Effect()
  signOut$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.SIGN_OUT),
    map(() => {
      this.authService.signOut();
      return new fromAction.SignOutSuccess();
    })
  );
}
