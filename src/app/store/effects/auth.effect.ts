import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
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
        map(result => new fromAction.SignInSuccess(result)),
        catchError(err => of(new fromAction.SignInFailure(err)))
      );
    })
  );

  @Effect()
  signInSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SIGN_IN_SUCCESS),
    switchMap((action: fromAction.SignInSuccess) => [
      new fromAction.SetCurrentSession(action.payload.id),
      new fromAction.SetCurrentUser(action.payload.user)
    ])
  );

  @Effect()
  signInFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SIGN_IN_FAILURE),
    switchMap((action: fromAction.SignInFailure) => [
      new fromAction.RaiseAlert({
        type: 'danger',
        content: action.payload.message
      }),
      new fromAction.ClearCurrentSession(),
      new fromAction.ClearCurrentUser()
    ])
  );

  @Effect()
  resumeSession$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.RESUME_SESSION),
    switchMap(() =>
      this.authService.resumeCurrentSession().pipe(
        map(result => new fromAction.ResumeSessionSuccess(result)),
        catchError(err => of(new fromAction.ResumeSessionFailure(err)))
      )
    )
  );

  @Effect()
  resumeSessionSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.RESUME_SESSION_SUCCESS),
    switchMap((action: fromAction.ResumeSessionSuccess) => [
      new fromAction.SetCurrentSession(action.payload.id),
      new fromAction.SetCurrentUser(action.payload.user)
    ])
  );

  @Effect()
  resumeSessionFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.RESUME_SESSION_FAILURE),
    switchMap(() => [
      new fromAction.ClearCurrentSession(),
      new fromAction.ClearCurrentUser()
    ])
  );

  @Effect()
  signOut$: Observable<any> = this.actions$.pipe(
    ofType(fromAction.SIGN_OUT),
    switchMap(() => [
      new fromAction.ClearCurrentSession(),
      new fromAction.ClearCurrentUser()
    ])
  );
}
