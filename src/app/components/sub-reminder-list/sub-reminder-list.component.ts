import { Component, OnInit, Input } from '@angular/core';
import { ReminderModel } from 'src/app/models';

@Component({
  selector: 'app-sub-reminder-list',
  templateUrl: './sub-reminder-list.component.html',
  styleUrls: ['./sub-reminder-list.component.css']
})
export class SubReminderListComponent implements OnInit {
  @Input()
  map: any;

  list: any[];
  subreminders: ReminderModel[];
  expand = false;

  constructor() {}

  ngOnInit() {
    if (this.map instanceof Array) {
      this.subreminders = this.map;
    } else if (this.map) {
      this.list = Object.keys(this.map).map(key => this.map[key]);
    }
  }

  onClick(item) {
    item.expand = !item.expand;
    event.stopPropagation();
  }
}
