import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  course$: Observable<any>;

  changed = false;
  courseOriginal: any = {};
  courseTemp: any = {};

  constructor(
    private router: Router,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.course$ = this.store.pipe(
      select(fromStore.courseEntitiesSelector),
      tap(course => Object.assign(this.courseOriginal, course)),
      tap(course => Object.assign(this.courseTemp, course))
    );
  }

  onChange() {
    this.changed =
      this.courseTemp.name !== this.courseOriginal.name ||
      this.courseTemp.endDate !== this.courseOriginal.endDate;
  }

  onSaveClick() {
    if (this.changed === true) {
      this.store.dispatch(
        new fromStore.UpdateCourse({
          courseId: this.courseOriginal.id,
          name: this.courseTemp.name,
          description: this.courseTemp.description,
          endDate: this.courseTemp.endDate
        })
      );
    }
  }

  onDeleteClick() {
    this.store.dispatch(
      new fromStore.DeleteCourse({ courseId: this.courseOriginal.id })
    );
    this.router.navigate(['/course']);
  }
}
