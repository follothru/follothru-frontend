import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';

import { ReminderService } from '../../services';

import * as fromAction from '../actions';
import * as fromState from '../states';

@Injectable()
export class RemindersEffects {
  constructor(
    private actions$: Actions,
    private reminderService: ReminderService,
    private store: Store<fromState.StoreState>
  ) {}

  @Effect()
  $getReminders: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.GET_REMINDERS),
    switchMap((action: fromAction.GetReminders) =>
      this.reminderService.getRemindersByCourseId(action.payload.courseId).pipe(
        map(result => new fromAction.GetRemindersSuccess(result)),
        catchError(err => of(new fromAction.GetRemindersFailure(err)))
      )
    )
  );

  @Effect()
  $createReminders: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.CREATE_REMINDERS),
    mergeMap((action: fromAction.CreateReminders) =>
      this.reminderService.createReminders(action.payload).pipe(
        tap(() =>
          this.store.dispatch(
            new fromAction.RaiseAlert({
              type: 'success',
              content: 'The reminder has been created.'
            })
          )
        ),
        map(() => new fromAction.CreateRemindersSuccess()),
        catchError(err => of(new fromAction.CreateRemindersFailure(err)))
      )
    )
  );

  @Effect()
  $deleteReminders: Observable<fromAction.RemindersAction> = this.actions$.pipe(
    ofType(fromAction.DELETE_REMINDERS),
    switchMap((action: fromAction.DeleteReminders) =>
      this.reminderService.deleteReminder(action.payload.reminderId).pipe(
        tap(() =>
          this.store.dispatch(
            new fromAction.RaiseAlert({
              type: 'success',
              content: 'The reminder has been deleted.'
            })
          )
        ),
        map(() => new fromAction.DeleteRemindersSuccess()),
        catchError(err => of(new fromAction.DeleteRemindersFailure(err)))
      )
    )
  );
}
