import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ReminderModel } from '../../models';

import * as fromStore from '../../store';
import { MatDialog } from '@angular/material';
import { EmailEditorComponent } from '../email-editor/email-editor.component';
import { tap } from 'rxjs/operators';

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

  days: string[];
  categories: any;
  expand = false;

  constructor(
    private store: Store<fromStore.StoreState>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const keys = Object.keys(this.reminder.categories);
    this.categories =
      keys &&
      keys.length === 1 &&
      keys[0] === new Date().getFullYear().toString()
        ? this.reminder.categories[keys[0]].content
        : this.reminder.categories;
  }

  onDeleleClick() {
    this.store.dispatch(
      new fromStore.DeleteReminders({
        reminderId: this.reminder.id,
        courseId: this.courseId
      })
    );
  }

  onFocus() {
    this.store.dispatch(
      new fromStore.FocusSubreminders(this.reminder.subreminders)
    );
  }

  onClearFocus() {
    this.store.dispatch(new fromStore.ClearSubreminderFocus());
  }

  editMessage(): void {
    const dialogRef = this.dialog.open(EmailEditorComponent, {
      width: '96vw',
      maxHeight: '96vh',
      data: {}
    });
    dialogRef
      .afterClosed()
      .pipe(tap(console.log))
      .subscribe();
  }
}
