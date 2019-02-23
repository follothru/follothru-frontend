import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, mergeMap } from 'rxjs/operators';

import { CourseService } from '../../services';

import * as fromAction from '../actions';
import * as fromState from '../states';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<fromState.StoreState>
  ) {}
  @Effect()
  $getCourses: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.GET_COURSES),
    switchMap(() =>
      this.courseService.getCourses().pipe(
        map(result => new fromAction.GetCoursesSuccess(result)),
        catchError(err => of(new fromAction.GetCoursesFailure(err)))
      )
    )
  );

  @Effect()
  $createCourse: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.CREATE_COURSE),
    mergeMap((action: fromAction.CreateCourse) =>
      this.courseService
        .createNewCourse(
          action.payload.name,
          action.payload.endDate,
          action.payload.description
        )
        .pipe(
          tap(() =>
            this.store.dispatch(
              new fromAction.RaiseAlert({
                type: 'success',
                content: `Course '${action.payload.name}' has been created.`
              })
            )
          ),
          map(result => new fromAction.CreateCourseSuccess(result)),
          catchError(err => {
            this.store.dispatch(
              new fromAction.RaiseAlert({
                type: 'danger',
                content: 'Failed to create course.'
              })
            );
            return of(new fromAction.CreateCourseFailure(err));
          })
        )
    )
  );

  @Effect()
  $deleteCourse: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.DELETE_COURSE),
    switchMap((action: fromAction.DeleteCourse) =>
      this.courseService.deleteCourse(action.payload.courseId).pipe(
        tap(() =>
          this.store.dispatch(
            new fromAction.RaiseAlert({
              type: 'success',
              content: `The course has been deleted.`
            })
          )
        ),
        map(result => new fromAction.DeleteCourseSuccess(result)),
        catchError(err => {
          this.store.dispatch(
            new fromAction.RaiseAlert({
              type: 'danger',
              content: 'Failed to delete course.'
            })
          );
          return of(new fromAction.DeleteCourseFailure(err));
        })
      )
    )
  );
}
