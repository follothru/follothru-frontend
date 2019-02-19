import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable, Unsubscribable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { NewCourseDialogComponent } from '../new-course-dialog/new-course-dialog.component';
import { CourseService } from '../../services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses$: Observable<any>;

  private createSubscription: Unsubscribable = null;
  private loadSubscription: Unsubscribable = null;

  constructor(
    private courseService: CourseService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCourses();
  }

  ngOnDestroy() {
    if (this.createSubscription !== null) {
      this.createSubscription.unsubscribe();
    }
    if (this.loadSubscription !== null) {
      this.loadSubscription.unsubscribe();
    }
  }

  onNewCourse() {
    const dialogRef = this.dialog.open(NewCourseDialogComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: {}
    });
    dialogRef.afterClosed().subscribe(config => this.createNewCourse(config));
  }

  private createNewCourse(config) {
    if (config !== undefined) {
      if (this.createSubscription !== null) {
        this.createSubscription.unsubscribe();
      }
      this.createSubscription = this.courseService
        .createNewCourse(config.name, config.endDate, config.description)
        .pipe(tap(() => this.loadCourses()))
        .subscribe();
    }
  }

  private loadCourses() {
    this.courses$ = this.courseService.getCourses().pipe();

    if (this.loadSubscription !== null) {
      this.loadSubscription.unsubscribe();
    }
    this.loadSubscription = this.courses$.subscribe();
  }
}
