import { Injectable } from '@angular/core';
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
          (result: EmailTemplateModel[]) =>
            new fromAction.GetEmailTemplatesSuccess(result)
        ),
        catchError(err => of(new fromAction.GetEmailTemplatesFailure(err)))
      )
    )
  );
}
