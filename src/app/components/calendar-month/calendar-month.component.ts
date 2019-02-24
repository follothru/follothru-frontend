import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { Observable } from 'rxjs';

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
  @Input()
  reminders: any = {};

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

  constructor() {}

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

  getRemindersForDate(date: Date) {
    if (!date) {
      return null;
    }
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return this.reminders[year] &&
      this.reminders[year][month] &&
      this.reminders[year][month][day]
      ? this.reminders[year][month][day]
      : null;
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
  }
}
