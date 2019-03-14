import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

import { ReminderService } from '../../services';
import { ReminderModel } from '../../models';

import * as fromAction from '../actions';

@Injectable()
export class RemindersEffects {
  constructor(
    private actions$: Actions,
    private reminderService: ReminderService
  ) {}

  @Effect()
  getReminders$: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.GET_REMINDERS),
    switchMap((action: fromAction.GetReminders) =>
      this.reminderService.getRemindersByCourseId(action.payload.courseId).pipe(
        map(
          (result: { reminders: ReminderModel[]; categories: any }) =>
            new fromAction.GetRemindersSuccess(result)
        ),
        catchError(err => of(new fromAction.GetRemindersFailure(err)))
      )
    )
  );

  @Effect()
  getRemindersFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_REMINDERS_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to load reminders.'
        })
    )
  );

  @Effect()
  createReminders$: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.CREATE_REMINDERS),
    mergeMap((action: fromAction.CreateReminders) =>
      this.reminderService.createReminders(action.payload).pipe(
        map(
          result =>
            new fromAction.CreateRemindersSuccess(
              result,
              action.payload.courseId
            )
        ),
        catchError(err => of(new fromAction.CreateRemindersFailure(err)))
      )
    )
  );

  @Effect()
  createRemindersSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.CREATE_REMINDERS_SUCCESS),
    switchMap((action: fromAction.CreateRemindersSuccess) => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: `The reminder has been created.`
      }),
      new fromAction.GetReminders({ courseId: action.courseId })
    ])
  );

  @Effect()
  createRemindersFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.CREATE_REMINDERS_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: `Failed to create the reminder.`
        })
    )
  );

  @Effect()
  $deleteReminders: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.DELETE_REMINDERS),
    switchMap((action: fromAction.DeleteReminders) =>
      this.reminderService.deleteReminder(action.payload.reminderId).pipe(
        map(
          result =>
            new fromAction.DeleteRemindersSuccess(
              result,
              action.payload.courseId
            )
        ),
        catchError(err => of(new fromAction.DeleteRemindersFailure(err)))
      )
    )
  );

  @Effect()
  $deleteReminderSuccesss: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.DELETE_REMINDERS_SUCCESS),
    switchMap((action: fromAction.DeleteRemindersSuccess) => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'The reminder has been deleted.'
      }),
      new fromAction.GetReminders({ courseId: action.courseId })
    ])
  );

  @Effect()
  $deleteReminderFailure: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.DELETE_REMINDERS_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to delete the reminder.'
        })
    )
  );

  @Effect()
  $getUpcomingReminders: Observable<
    fromAction.RemindersAction
  > = this.actions$.pipe(
    ofType(fromAction.GET_UPCOMING_REMINDERS),
    switchMap(() =>
      this.reminderService.getUpcomingReminders().pipe(
        map(
          (result: { reminders: ReminderModel[] }) =>
            new fromAction.GetUpcomingRemindersSuccess(result)
        ),
        catchError(err => of(new fromAction.GetUpcomingRemindersFailure(err)))
      )
    )
  );

  @Effect()
  $getUpcomingRemindersFailure: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_UPCOMING_REMINDERS_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to retrieve upcoming reminders information.'
        })
    )
  );
}
