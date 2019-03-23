import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  courseId: string;
  course$: Observable<any>;
  isLoading$: Observable<boolean>;
  isError$: Observable<boolean>;
  reminders$: Observable<any>;
  currentTab: string;
  privileged$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStore.StoreState>
  ) {
    this.setCurrentTab('reminders');
  }

  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.params.id;

    this.course$ = this.store.pipe(select(fromStore.courseEntitiesSelector));

    this.isLoading$ = this.store.pipe(
      select(fromStore.courseIsLoadingSelector)
    );

    this.privileged$ = this.store.pipe(
      select(fromStore.SessionCurrentUserGroupsSelector),
      map(
        (groups: string[]) =>
          groups && (groups.includes('SUPER_ADMIN') || groups.includes('ADMIN'))
      )
    );

    this.loadCourse();
  }

  ngOnDestroy() {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }

  approveCourse(): void {
    this.store.dispatch(new fromStore.ApproveCourse(this.courseId));
  }

  private loadCourse() {
    this.store.dispatch(new fromStore.GetCourse({ courseId: this.courseId }));
  }
}
