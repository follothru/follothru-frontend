import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../../store';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  reminders$: Observable<any>;

  allMonths: number[][] = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]];
  currMonths: number[] = [];
  currentYear: number;
  currentSeason: number;

  constructor(private store: Store<fromStore.StoreState>) {
    this.currentYear = new Date().getFullYear();
    this.currentSeason = this.determineSeason();
  }

  ngOnInit() {
    this.reminders$ = this.store.pipe(
      select(fromStore.remindersEntitiesSelector),
      map((data: any[]) => {
        const reminders = {};
        data.forEach(reminder => {
          const startDate = new Date(reminder.startDate);
          const year = startDate.getFullYear();
          const month = startDate.getMonth();
          const day = startDate.getDate();
          if (reminders[year] === undefined) {
            reminders[year] = {};
          }
          if (reminders[year][month] === undefined) {
            reminders[year][month] = {};
          }
          if (reminders[year][month][day] === undefined) {
            reminders[year][month][day] = [];
          }
          reminders[year][month][day].push(reminder);
        });
        return reminders;
      })
    );
  }

  onNext() {
    if (this.currentSeason >= 2) {
      this.currentYear++;
      this.currentSeason = 0;
    } else {
      this.currentSeason++;
    }
  }

  onPrevious() {
    if (this.currentSeason <= 0) {
      this.currentYear--;
      this.currentSeason = 2;
    } else {
      this.currentSeason--;
    }
  }

  private determineSeason(monthNum: number = null) {
    monthNum = monthNum !== null ? monthNum : new Date().getMonth();
    if (this.allMonths[0].includes(monthNum)) {
      return 0;
    }
    if (this.allMonths[1].includes(monthNum)) {
      return 1;
    }
    if (this.allMonths[2].includes(monthNum)) {
      return 2;
    }
    return 0;
  }
}
