import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.css']
})
export class CourseStudentsComponent implements OnInit {
  @Input()
  courseId: string;

  students$: Observable<any[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.students$ = this.store.pipe(
      select(fromStore.courseEnrolledStudentsSelector)
    );
    this.isLoading$ = this.store.pipe(
      select(fromStore.courseEnrolledStudentsIsLoadingSelector)
    );
    this.store.dispatch(new fromStore.GetEnrolledStudents(this.courseId));
  }
}
