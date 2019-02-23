import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  signIn$: Observable<fromAction.AuthAction> = this.actions$.pipe(
    ofType(fromAction.SIGN_IN),
    switchMap((action: fromAction.SignIn) => {
      const { username, password } = action.payload;
      return this.authService.authenticateUser(username, password).pipe(
        map(result => new fromAction.SignInSuccess({ ...result })),
        catchError(err => of(new fromAction.SignInFailure(err)))
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
        catchError(err => of(new fromAction.ResumeSessionFailure(err)))
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
