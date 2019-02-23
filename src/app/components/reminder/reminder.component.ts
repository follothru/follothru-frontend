import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  @Input()
  reminder: any;
  showInfo = false;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {}

  onDeleleClick() {
    this.store.dispatch(
      new fromStore.DeleteReminders({ reminderId: this.reminder.id })
    );
  }
}
