import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  getUsers$: Observable<fromAction.UserAction> = this.actions$.pipe(
    ofType(fromAction.GET_USERS),
    switchMap(() =>
      this.userService.getAllUsers().pipe(
        map(users => new fromAction.GetUsersSuccess(users)),
        catchError(err => of(new fromAction.GetUsersFailure(err)))
      )
    )
  );

  @Effect()
  getUsersFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_USERS_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to retrieve users.'
        })
    )
  );

  @Effect()
  removeUser$: Observable<fromAction.UserAction> = this.actions$.pipe(
    ofType(fromAction.REMOVE_USER),
    switchMap((action: fromAction.RemoveUser) =>
      this.userService.removeUser(action.userId).pipe(
        map(() => new fromAction.RemoveUserSuccess()),
        catchError(err => of(new fromAction.RemoveUserFailure(err)))
      )
    )
  );

  @Effect()
  removeUserSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.REMOVE_USER_SUCCESS),
    switchMap(() => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'The user has been removed'
      }),
      new fromAction.GetUsers()
    ])
  );

  @Effect()
  removeUserFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.REMOVE_USER_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to remove the user.'
        })
    )
  );

  @Effect()
  assignAdmin$: Observable<fromAction.UserAction> = this.actions$.pipe(
    ofType(fromAction.ASSIGN_ADMIN),
    switchMap((action: fromAction.AssignAdmin) =>
      this.userService.assignAdmin(action.userId).pipe(
        map(() => new fromAction.AssignAdminSuccess()),
        catchError(err => of(new fromAction.AssignAdminFailure(err)))
      )
    )
  );

  @Effect()
  assignAdminSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.ASSIGN_ADMIN_SUCCSSS),
    switchMap(() => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'Admin is assigned to the user.'
      }),
      new fromAction.GetUsers()
    ])
  );

  @Effect()
  assignAdminFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.ASSIGN_ADMIN_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to assign admin to the user.'
        })
    )
  );

  @Effect()
  removeAdmin$: Observable<fromAction.UserAction> = this.actions$.pipe(
    ofType(fromAction.REMOVE_ADMIN),
    switchMap((action: fromAction.RemoveAdmin) =>
      this.userService.removeAdmin(action.userId).pipe(
        map(() => new fromAction.RemoveAdminSuccess()),
        catchError(err => of(new fromAction.RemoveAdminFailure(err)))
      )
    )
  );

  @Effect()
  removeAdminSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.REMOVE_ADMIN_SUCCESS),
    switchMap(() => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'Admin is removed from the user.'
      }),
      new fromAction.GetUsers()
    ])
  );

  @Effect()
  removeAdminFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.REMOVE_ADMIN_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to remove admin from the user.'
        })
    )
  );
}
