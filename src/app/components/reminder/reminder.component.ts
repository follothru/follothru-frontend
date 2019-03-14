import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReminderModel } from '../../models';

import * as fromStore from '../../store';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  @Input()
  courseId: string;

  @Input()
  reminder: ReminderModel;

  subreminders: any[];
  days: string[];
  categories: any;
  showInfo = false;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.categories = this.reminder.categories;
  }

  onDeleleClick() {
    this.store.dispatch(
      new fromStore.DeleteReminders({
        reminderId: this.reminder.id,
        courseId: this.courseId
      })
    );
  }
}
