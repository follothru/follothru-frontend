import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Unsubscribable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { SubreminderModel } from '../../models';
import { EmailEditorComponent } from '../email-editor/email-editor.component';

import * as fromStore from '../../store';
import { ConfirmDialogComponent } from '../common/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sub-reminder',
  templateUrl: './sub-reminder.component.html',
  styleUrls: ['./sub-reminder.component.css']
})
export class SubReminderComponent implements OnInit, OnDestroy {
  @Input()
  subreminder: SubreminderModel;
  type: string;
  deleted = false;

  private emailEditorSub: Unsubscribable = null;
  private confirmDialogSub: Unsubscribable = null;

  constructor(
    private dialog: MatDialog,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.type = 'reminder';
  }

  ngOnDestroy() {
    if (this.emailEditorSub !== null) {
      this.emailEditorSub.unsubscribe();
    }
    if (this.confirmDialogSub !== null) {
      this.confirmDialogSub.unsubscribe();
    }
  }

  getTime() {
    const dateTime = new Date(this.subreminder.dateTime);
    const m = dateTime.getHours() >= 12 ? 'pm' : 'am';
    let hour = dateTime.getHours() % 12;
    hour = hour !== 0 ? hour : 12;
    return `${this.formatTimeDigit(hour)}:${this.formatTimeDigit(
      dateTime.getMinutes()
    )} ${m}`;
  }

  formatTimeDigit(num): string {
    return num < 10 ? '0' + num : `${num}`;
  }

  editMessage(): void {
    const dialogRef = this.dialog.open(EmailEditorComponent, {
      width: '100vw',
      data: {}
    });
    this.emailEditorSub = dialogRef
      .afterClosed()
      .pipe(
        filter(config => config),
        tap(config => {
          this.store.dispatch(
            new fromStore.SetSubreminderEmail(
              this.subreminder.id,
              config.templateIds,
              config.values
            )
          );
        })
      )
      .subscribe();
  }

  onDelete(): void {
    this.confirmDialogSub = this.dialog
      .open(ConfirmDialogComponent, {
        data: { message: 'Are you sure you want to detete this reminder?' }
      })
      .afterClosed()
      .pipe(
        filter(result => result),
        tap(() =>
          this.store.dispatch(
            new fromStore.DeleteSubreminders('', [this.subreminder.id])
          )
        ),
        tap(() => (this.deleted = true))
      )
      .subscribe();
  }
}
