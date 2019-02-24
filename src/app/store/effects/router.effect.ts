import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromAction from '../actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false })
  routerNavigate$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.ROUTER_NAVIGATE),
    tap((action: fromAction.RouterNavigate) =>
      this.router.navigate([action.path])
    )
  );
}
