import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

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

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.alert$ = this.store.pipe(
      select(fromStore.alertEntitiesSelector),
      filter(alert => alert.message !== undefined),
      tap(() => (this.timeout = false)),
      tap(() => setTimeout(() => (this.timeout = true), this.TIME_OUT))
    );
    this.alert$.subscribe();
  }
}
