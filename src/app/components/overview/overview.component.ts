import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  upcommingReminders$: Observable<any[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.upcommingReminders$ = this.store.pipe(
      select(fromStore.upcommingRemindersSelector),
      map(reminders =>
        reminders.map(reminder =>
          reminder.subreminders.map(subreminder => {
            return {
              ...subreminder,
              course: reminder.course
            };
          })
        )
      ),
      map(groups => groups.reduce((prev, curr) => prev.concat(curr), [])),
      map(subreminders =>
        subreminders.sort(
          (a, b) =>
            new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
        )
      )
    );
    this.isLoading$ = this.store.pipe(
      select(fromStore.remindersIsLoadingSelector)
    );

    this.upcommingReminders$.subscribe();
    this.store.dispatch(new fromStore.GetUpcommingReminders());
  }
}
