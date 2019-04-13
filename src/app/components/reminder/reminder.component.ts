import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { Unsubscribable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { ReminderModel } from '../../models';

import { EmailEditorComponent } from '../email-editor/email-editor.component';

import * as fromStore from '../../store';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit, OnDestroy {
  @Input()
  courseId: string;

  @Input()
  reminder: ReminderModel;

  private emailEditorSub: Unsubscribable = null;
  private confirmDialogSub: Unsubscribable = null;

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

  ngOnDestroy() {
    if (this.emailEditorSub !== null) {
      this.emailEditorSub.unsubscribe();
    }
    if (this.confirmDialogSub !== null) {
      this.confirmDialogSub.unsubscribe();
    }
  }

  onDeleleClick() {
    this.confirmDialogSub = this.dialog
      .open(ConfirmDialogComponent, {
        data: { message: 'Are you sure that you want to delete the reminder?' }
      })
      .afterClosed()
      .pipe(
        filter(result => result),
        tap(() =>
          this.store.dispatch(
            new fromStore.DeleteReminders({
              reminderId: this.reminder.id,
              courseId: this.courseId
            })
          )
        )
      )
      .subscribe();
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
      data: {}
    });
    this.emailEditorSub = dialogRef
      .afterClosed()
      .pipe(
        filter(config => config),
        tap(config => {
          this.store.dispatch(
            new fromStore.SetReminderEmail(
              this.reminder.id,
              config.templateIds,
              config.values
            )
          );
        })
      )
      .subscribe();
  }
}
