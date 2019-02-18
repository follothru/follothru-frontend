import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  allMonths: number[][] = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]];
  currMonths: number[] = [];
  currentYear: number;
  currentSeason: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.currentSeason = this.determineSeason();
  }

  ngOnInit() {}

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
