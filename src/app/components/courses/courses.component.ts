import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { CourseService } from '../../services';
import { NewCourseDialogComponent } from '../new-course-dialog/new-course-dialog.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<any>;

  constructor(
    private courseService: CourseService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCourses();
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
      this.courseService
        .createNewCourse(config.name, config.endDate, config.description)
        .pipe(tap(() => this.loadCourses()))
        .subscribe();
    }
  }

  private loadCourses() {
    this.courses$ = this.courseService.getCourses().pipe();
    this.courses$.subscribe();
  }
}
