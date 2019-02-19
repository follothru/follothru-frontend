import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Unsubscribable } from 'rxjs';

import { CourseService } from '../../services';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  courseId: string;
  course$: Observable<any>;
  reminders$: Observable<any>;
  currentTab: string;
  private courseSubscription: Unsubscribable;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.setCurrentTab('reminders');
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;
    this.loadCourse();
  }

  ngOnDestroy() {
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }

  private loadCourse() {
    if (this.courseSubscription) {
      this.courseSubscription.unsubscribe();
    }
    this.course$ = this.courseService.getCourseById(this.courseId);
    this.courseSubscription = this.course$.subscribe();
  }
}
