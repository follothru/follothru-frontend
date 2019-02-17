import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable, throwError, Unsubscribable } from 'rxjs';

import { CourseService, ReminderService } from '../../services';
import { ReminderCreateWidzardComponent } from '../reminder-create-widzard/reminder-create-widzard.component';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  courseId: string;
  course$: Observable<any>;
  reminders$: Observable<any>;
  courseLoading = true;
  remindersLoading = true;
  private remindersSubscription: Unsubscribable;
  private courseSubscription: Unsubscribable;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private reminderService: ReminderService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.loadCourse();
    this.loadReminders();
  }

  ngOnDestroy() {
    if (this.remindersSubscription) {
      this.remindersSubscription.unsubscribe();
    }
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
  }

  newReminder() {
    const dialogRef = this.dialog.open(ReminderCreateWidzardComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: { courseId: this.courseId }
    });

    dialogRef.afterClosed().subscribe(config => this.createNewReminder(config));
  }

  private loadReminders() {
    this.remindersLoading = true;
    if (this.remindersSubscription) {
      this.remindersSubscription.unsubscribe();
    }
    this.reminders$ = this.reminderService.getRemindersByCourseId(
      this.courseId
    );
    this.remindersSubscription = this.reminders$.subscribe(
      () => (this.remindersLoading = false)
    );
  }

  private loadCourse() {
    this.courseLoading = true;
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
    this.course$ = this.courseService.getCourseById(this.courseId);
    this.courseSubscription = this.course$.subscribe(
      () => (this.courseLoading = false)
    );
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
}
