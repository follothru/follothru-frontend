import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CourseService, ReminderService } from '../../services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseId: string;
  course$: Observable<any>;
  reminders$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.course$ = this.courseService.getCourseById(this.courseId);
    this.reminders$ = this.reminderService.getRemindersByCourseId(
      this.courseId
    );
    this.course$.subscribe();
    this.reminders$.subscribe();
  }
}
