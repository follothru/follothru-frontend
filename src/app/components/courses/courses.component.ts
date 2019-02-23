import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable, Unsubscribable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { NewCourseDialogComponent } from '../new-course-dialog/new-course-dialog.component';

import * as fromStore from '../../store';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courses$: Observable<any>;
  isLoading$: Observable<boolean>;
  isError$: Observable<boolean>;

  private expiredSubscription: Unsubscribable;
  private dialogSubscription: Unsubscribable = null;

  constructor(
    private dialog: MatDialog,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.courses$ = this.store.pipe(select(fromStore.coursesEntitiesSelector));
    this.isLoading$ = this.store.pipe(
      select(fromStore.coursesIsLoadingSelector)
    );
    this.isError$ = this.store.pipe(select(fromStore.coursesIsErrorSelector));

    this.expiredSubscription = this.store
      .pipe(
        select(fromStore.coursesExpiredSelector),
        filter(expired => expired),
        tap(() => this.loadCourses())
      )
      .subscribe();

    this.loadCourses();
  }

  ngOnDestroy() {
    this.expiredSubscription.unsubscribe();
    if (this.dialogSubscription !== null) {
      this.dialogSubscription.unsubscribe();
    }
  }

  onNewCourse() {
    if (this.dialogSubscription !== null) {
      this.dialogSubscription.unsubscribe();
    }
    const dialogRef = this.dialog.open(NewCourseDialogComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: {}
    });
    this.dialogSubscription = dialogRef
      .afterClosed()
      .pipe(
        filter(config => config !== undefined),
        tap(config => this.createNewCourse(config))
      )
      .subscribe();
  }

  private createNewCourse(config) {
    this.store.dispatch(new fromStore.CreateCourse(config));
  }

  private loadCourses() {
    this.store.dispatch(new fromStore.GetCourses());
  }
}
