import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';

import { CourseService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  @Effect()
  getCourses$: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.GET_COURSES),
    switchMap(() =>
      this.courseService.getCourses().pipe(
        map(result => new fromAction.GetCoursesSuccess(result)),
        catchError(err => of(new fromAction.GetCoursesFailure(err)))
      )
    )
  );

  @Effect()
  getCoursesFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_COURSES_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to retrieve courses.'
        })
    )
  );

  @Effect()
  createCourse$: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.CREATE_COURSE),
    mergeMap((action: fromAction.CreateCourse) =>
      this.courseService
        .createNewCourse(
          action.payload.name,
          action.payload.endDate,
          action.payload.description,
          action.payload.hasPlanningPrompt,
          action.payload.planningPrompt
        )
        .pipe(
          map(result => new fromAction.CreateCourseSuccess(result)),
          catchError(err => of(new fromAction.CreateCourseFailure(err)))
        )
    )
  );

  @Effect()
  deleteCourse$: Observable<fromAction.CoursesAction> = this.actions$.pipe(
    ofType(fromAction.DELETE_COURSE),
    switchMap((action: fromAction.DeleteCourse) =>
      this.courseService.deleteCourse(action.payload.courseId).pipe(
        map(result => new fromAction.DeleteCourseSuccess(result)),
        catchError(err => of(new fromAction.DeleteCourseFailure(err)))
      )
    )
  );

  @Effect()
  createCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.CREATE_COURSE_SUCCESS),
    switchMap((action: fromAction.CreateCourseSuccess) => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: `The course '${action.payload.name}' has been created.`
      }),
      new fromAction.GetCourses()
    ])
  );

  @Effect()
  createCourseFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.CREATE_COURSE_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: `Failed to create the course.`
        })
    )
  );

  @Effect()
  deleteCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.DELETE_COURSE_SUCCESS),
    switchMap(() => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'The course has been deleted.'
      }),
      new fromAction.RouterNavigate('/course')
    ])
  );

  @Effect()
  deleteCourseFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.DELETE_COURSE_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: `Failed to delete the course.`
        })
    )
  );
}
