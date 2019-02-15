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
  course$: Observable<any>;
  reminders$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private reminderService: ReminderService
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.course$ = this.courseService.getCourseById(id);
    this.reminders$ = this.reminderService.getRemindersByCourseId(id);
    this.course$.subscribe();
    this.reminders$.subscribe();
  }
}
