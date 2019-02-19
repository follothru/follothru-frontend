import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ReminderCreateWidzardComponent } from '../reminder-create-widzard/reminder-create-widzard.component';

import { ReminderService } from 'src/app/services';

@Component({
  selector: 'app-course-reminders',
  templateUrl: './course-reminders.component.html',
  styleUrls: ['./course-reminders.component.css']
})
export class CourseRemindersComponent implements OnInit {
  @Input()
  courseId: string;
  reminders$: Observable<any>;

  constructor(
    private reminderService: ReminderService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadReminders();
  }

  newReminder() {
    const dialogRef = this.dialog.open(ReminderCreateWidzardComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: { courseId: this.courseId }
    });

    dialogRef.afterClosed().subscribe(config => this.createNewReminder(config));
  }
  private createNewReminder(config) {
    if (config !== undefined) {
      const {
        name,
        startDate,
        startTime,
        endDate,
        endTime,
        repeat,
        sendTime
      } = config;
      const courseId = this.courseId;
      this.reminderService
        .createReminders({
          courseId,
          name,
          startDate,
          startTime,
          endDate,
          endTime,
          repeat,
          sendTime
        })
        .pipe(
          tap(() => {
            this.loadReminders();
          }),
          catchError(err => {
            console.error('Failed to create reminder:', err);
            return throwError(console.error);
          })
        )
        .subscribe();
    }
  }

  private loadReminders() {
    this.reminders$ = this.reminderService.getRemindersByCourseId(
      this.courseId
    );
    this.reminders$.subscribe();
  }
}
