import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-calendar-marker',
  templateUrl: './calendar-marker.component.html',
  styleUrls: ['./calendar-marker.component.css']
})
export class CalendarMarkerComponent implements OnInit {
  @Input()
  item;

  type: string;
  focused$: Observable<boolean>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.focused$ = this.store.pipe(
      select(fromStore.focusedSubremindersSelector),
      map(
        subreminders =>
          subreminders !== null && subreminders[this.item.id] !== undefined
      )
    );
    this.type = this.item.type;
  }
}
