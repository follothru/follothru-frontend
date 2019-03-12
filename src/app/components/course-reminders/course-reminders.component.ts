import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, Unsubscribable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ReminderModel } from '../../models';
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
  reminders$: Observable<ReminderModel[]>;
  isLoading$: Observable<boolean>;
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
      .pipe(filter(result => result !== undefined))
      .subscribe(config => this.createNewReminder(config));
  }

  private createNewReminder(answers) {
    if (answers !== undefined) {
      answers.courseId = this.courseId;
      this.store.dispatch(
        new fromStore.CreateReminders(this.processAnswers(answers))
      );
    }
  }

  private processAnswers(
    answer
  ): {
    courseId: string;
    name: string;
    type: string;
    startDateTime?: Date;
    endDateTime?: Date;
    repeats: any[];
    sendTime: any[];
  } {
    const {
      name,
      startDate,
      startTime,
      endDate,
      repeats,
      sendTime,
      endDate_no
    } = answer;
    const startDateTime = new Date(startTime.getTime());
    startDateTime.setFullYear(startDate.getFullYear());
    startDateTime.setMonth(startDate.getMonth());
    startDateTime.setDate(startDate.getDate());
    let endDateTime = null;
    if (endDate) {
      endDateTime = new Date(startTime.getTime());
      endDateTime.setFullYear(endDate.getFullYear());
      endDateTime.setMonth(endDate.getMonth());
      endDateTime.setDate(endDate.getDate());
    }
    const reqRepeats: any[] = [];
    if (repeats.daily) {
      reqRepeats.push({ name: 'dayInterval', value: 1 });
    }
    if (repeats.weekly) {
      reqRepeats.push({ name: 'weekInterval', value: 1 });
    }
    if (repeats.monthly) {
      reqRepeats.push({ name: 'monthInterval', value: 1 });
    }

    const reqSendTime: any[] = [];
    if (sendTime.oneHourBefore) {
      reqSendTime.push({ name: 'hourAdvance', value: 1 });
    }
    if (sendTime.oneDayBefore) {
      reqSendTime.push({ name: 'dayAdvance', value: 1 });
    }
    if (sendTime.oneWeekBefore) {
      reqSendTime.push({ name: 'weekAdvance', value: 1 });
    }

    const type = endDate_no ? 'activity' : 'event';

    return {
      courseId: this.courseId,
      name,
      type,
      startDateTime,
      endDateTime,
      repeats: reqRepeats,
      sendTime: reqSendTime
    };
  }

  private loadReminders() {
    this.store.dispatch(
      new fromStore.GetReminders({ courseId: this.courseId })
    );
  }
}
