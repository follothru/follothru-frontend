import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-calendar-month',
  templateUrl: './calendar-month.component.html',
  styleUrls: ['./calendar-month.component.css']
})
export class CalendarMonthComponent implements OnInit, OnChanges {
  @Input()
  month: number;
  @Input()
  year: number;

  subreminders$: Observable<any>;

  monthText: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  monthDisplayText: string;
  dates: Date[];
  grid: Date[][];

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.update();
  }

  ngOnChanges(change) {
    if (change.month !== undefined) {
      this.month = change.month.currentValue;
    }
    if (change.year !== undefined) {
      this.year = change.year.currentValue;
    }
    this.update();
  }

  private update() {
    this.dates = [];
    this.grid = [];
    this.monthDisplayText = this.monthText[this.month];
    const dateTmp = new Date(0);
    dateTmp.setDate(1);
    dateTmp.setMonth(this.month);
    dateTmp.setFullYear(this.year);
    while (dateTmp.getMonth() === this.month) {
      this.dates.push(new Date(dateTmp.getTime()));
      dateTmp.setDate(dateTmp.getDate() + 1);
    }

    let row = 0;
    let col = this.dates[0].getDay();

    this.dates.forEach(date => {
      if (this.grid[row] === undefined) {
        this.grid[row] = [];
      }
      this.grid[row][col] = date;
      col++;
      if (date.getDay() === 6) {
        ++row;
        col = 0;
      }
    });
    this.subreminders$ = this.store.pipe(
      select(fromStore.subremindersForMonthSelector(this.year, this.month))
    );
  }
}
