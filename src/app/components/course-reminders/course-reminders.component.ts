import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, Unsubscribable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ReminderCreateWidzardComponent } from '../reminder-create-widzard/reminder-create-widzard.component';

import * as fromStore from '../../store';

@Component({
  selector: 'app-course-reminders',
  templateUrl: './course-reminders.component.html',
  styleUrls: ['./course-reminders.component.css']
})
export class CourseRemindersComponent implements OnInit, OnDestroy {
  @Input()
  courseId: string;
  reminders$: Observable<any>;
  isLoading$: Observable<any>;
  error$: Observable<any>;

  private dialogSubscription: Unsubscribable = null;

  constructor(
    private dialog: MatDialog,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.reminders$ = this.store.pipe(
      select(fromStore.remindersEntitiesSelector)
    );
    this.isLoading$ = this.store.pipe(
      select(fromStore.remindersIsLoadingSelector)
    );

    this.loadReminders();
  }

  ngOnDestroy() {
    if (this.dialogSubscription !== null) {
      this.dialogSubscription.unsubscribe();
    }
  }

  newReminder() {
    const dialogRef = this.dialog.open(ReminderCreateWidzardComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: { courseId: this.courseId }
    });

    if (this.dialogSubscription !== null) {
      this.dialogSubscription.unsubscribe();
    }
    this.dialogSubscription = dialogRef
      .afterClosed()
      .pipe(
        map(result => {
          const { name, startDate, endDate, repeats } = result;
          if (repeats.daily) {
            repeats.dayInterval = 1;
          }
          if (repeats.weekly) {
            repeats.weekInterval = 1;
          }
          if (repeats.monthly) {
            repeats.monthInterval = 1;
          }
          return { name, startDate, endDate, repeats };
        })
      )
      .subscribe(config => this.createNewReminder(config));
  }

  private createNewReminder(config) {
    if (config !== undefined) {
      config.courseId = this.courseId;
      this.store.dispatch(new fromStore.CreateReminders(config));
    }
  }

  private loadReminders() {
    this.store.dispatch(
      new fromStore.GetReminders({ courseId: this.courseId })
    );
  }
}
