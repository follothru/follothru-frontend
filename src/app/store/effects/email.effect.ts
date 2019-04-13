import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { EmailService } from '../../services';
import { EmailTemplateModel } from '../../models';

import * as fromAction from '../actions';

@Injectable()
export class EmailEffects {
  constructor(private actions$: Actions, private emailService: EmailService) {}

  @Effect()
  getEmailTemplates$: Observable<fromAction.EmailAction> = this.actions$.pipe(
    ofType(fromAction.GET_EMAIL_TEMPLATES),
    switchMap(() =>
      this.emailService.getEmailTemplates().pipe(
        map(
          (results: EmailTemplateModel[]) =>
            new fromAction.GetEmailTemplatesSuccess(
              results.map(
                (template: EmailTemplateModel) =>
                  new EmailTemplateModel(
                    template.templateId,
                    template.index,
                    template.content,
                    template.values
                  )
              )
            )
        ),
        catchError(err => of(new fromAction.GetEmailTemplatesFailure(err)))
      )
    )
  );

  @Effect()
  setReminderEmail$: Observable<fromAction.EmailAction> = this.actions$.pipe(
    ofType(fromAction.SET_REMINDER_EMAIL),
    switchMap((action: fromAction.SetReminderEmail) =>
      this.emailService
        .setReminderEmail(action.reminderId, action.templateIds, action.values)
        .pipe(
          map(() => new fromAction.SetReminderEmailSuccess()),
          catchError((err: any) =>
            of(new fromAction.SetReminderEmailFailure(err))
          )
        )
    )
  );

  @Effect()
  setReminderEmailSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SET_REMINDER_EMAIL_SUCCESS),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'success',
          content: 'The email is successfully set.'
        })
    )
  );

  @Effect()
  setReminderEmailFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SET_REMINDER_EMAIL_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'failure',
          content: 'Failed to update email.'
        })
    )
  );

  @Effect()
  setSubreminderEmail$: Observable<fromAction.EmailAction> = this.actions$.pipe(
    ofType(fromAction.SET_SUBREMINDER_EMAIL),
    switchMap((action: fromAction.SetSubreminderEmail) =>
      this.emailService
        .setSubreminderEmail(
          action.subreminderId,
          action.templateIds,
          action.values
        )
        .pipe(
          map(() => new fromAction.SetSubreminderEmailSuccess()),
          catchError((err: any) =>
            of(new fromAction.SetSubreminderEmailFailure(err))
          )
        )
    )
  );

  @Effect()
  setSubreminderEmailSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SET_SUBREMINDER_EMAIL_SUCCESS),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'success',
          content: 'The email is successfully set.'
        })
    )
  );

  @Effect()
  setSubreminderEmailFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.SET_SUBREMINDER_EMAIL_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'failure',
          content: 'Failed to update email.'
        })
    )
  );
}
