import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReminderModel } from '../../models';

import * as fromStore from '../../store';

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

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    if (this.map instanceof Array) {
      this.subreminders = this.map;
    } else if (this.map) {
      this.list = Object.keys(this.map).map(key => this.map[key]);
    }
  }

  onClick(item) {
    item.expand = !item.expand;
  }

  onFocus(item) {
    this.store.dispatch(
      new fromStore.FocusSubreminders(this.getAllSubreminders(item))
    );
  }

  onClearFocus() {
    // this.store.dispatch(new fromStore.ClearSubreminderFocus());
  }

  private getAllSubreminders(item) {
    if (!item || !item.content) {
      return [];
    }
    if (item.content instanceof Array) {
      return item.content;
    }
    const { content } = item;
    return Object.keys(content).reduce(
      (prev, key) => prev.concat(this.getAllSubreminders(content[key])),
      []
    );
  }
}
