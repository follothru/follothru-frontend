import { Component, OnInit, OnDestroy } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Unsubscribable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  TIME_OUT = 5000;
  displayedAlerts: any[] = [];
  timeout = false;

  private subscription: Unsubscribable;

  constructor(private actions$: Actions) {}

  ngOnInit() {
    this.subscription = this.actions$
      .pipe(
        ofType(fromStore.RAISE_ALERT),
        map((action: fromStore.RaiseAlert) => action.payload),
        tap(alert => (alert.timeout = false)),
        tap(alert => this.displayedAlerts.push(alert)),
        tap(alert => setTimeout(() => (alert.timeout = true), this.TIME_OUT))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
