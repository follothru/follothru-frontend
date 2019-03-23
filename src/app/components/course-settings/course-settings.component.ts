import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  course$: Observable<any>;
  privileged$: Observable<boolean>;

  changed = false;
  courseOriginal: any = {};
  courseTemp: any = {};

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.course$ = this.store.pipe(
      select(fromStore.courseEntitiesSelector),
      tap(course => Object.assign(this.courseOriginal, course)),
      tap(course => Object.assign(this.courseTemp, course))
    );
    this.privileged$ = this.store.pipe(
      select(fromStore.SessionCurrentUserGroupsSelector),
      map(
        (groups: string[]) =>
          groups && (groups.includes('SUPER_ADMIN') || groups.includes('ADMIN'))
      )
    );
  }

  onChange() {
    this.changed =
      this.courseTemp.name !== this.courseOriginal.name ||
      this.courseTemp.endDate !== this.courseOriginal.endDate ||
      this.courseTemp.description !== this.courseOriginal.description ||
      this.courseTemp.hasPlanningPrompt !==
        this.courseOriginal.hasPlanningPrompt ||
      this.courseTemp.planningPrompt !== this.courseOriginal.planningPrompt;
  }

  onSaveClick() {
    this.store.dispatch(
      new fromStore.UpdateCourse({
        courseId: this.courseOriginal.id,
        name: this.courseTemp.name,
        endDate: this.courseTemp.endDate,
        hasPlanningPrompt: this.courseTemp.hasPlanningPrompt,
        planningPrompt: this.courseTemp.planningPrompt
      })
    );
  }

  onDeleteClick() {
    this.store.dispatch(
      new fromStore.DeleteCourse({ courseId: this.courseOriginal.id })
    );
  }
}
