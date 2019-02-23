import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  TIME_OUT = 5000;
  alert$: Observable<any>;
  timeout = false;

  constructor(private actions$: Actions) {}

  ngOnInit() {
    this.alert$ = this.actions$.pipe(
      ofType(fromStore.RAISE_ALERT),
      map((action: fromStore.RaiseAlert) => action.payload),
      tap(() => (this.timeout = false)),
      tap(() => setTimeout(() => (this.timeout = true), this.TIME_OUT))
    );
  }
}
