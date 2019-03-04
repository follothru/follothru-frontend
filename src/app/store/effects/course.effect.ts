import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { CourseService } from '../../services';

import * as fromAction from '../actions';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  @Effect()
  getCourse$: Observable<fromAction.CourseAction> = this.actions$.pipe(
    ofType(fromAction.GET_COURSE),
    switchMap((action: fromAction.GetCourse) =>
      this.courseService.getCourseById(action.payload.courseId).pipe(
        map(result => new fromAction.GetCourseSuccess(result)),
        catchError(err => of(new fromAction.GetCourseFailure(err)))
      )
    )
  );

  @Effect()
  getCourseFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_COURSE_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to retrieve course information.'
        })
    )
  );

  @Effect()
  updateCourse$: Observable<fromAction.CourseAction> = this.actions$.pipe(
    ofType(fromAction.UPDATE_COURSE),
    switchMap((action: fromAction.UpdateCourse) =>
      this.courseService
        .updateCourse(
          action.payload.courseId,
          action.payload.name,
          action.payload.endDate,
          action.payload.hasPlanningPrompt,
          action.payload.planningPrompt
        )
        .pipe(
          map(result => new fromAction.UpdateCourseSuccess(result)),
          catchError(err => of(new fromAction.UpdateCourseFailure(err)))
        )
    )
  );

  @Effect()
  updateCourseSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.UPDATE_COURSE_SUCCESS),
    switchMap((action: fromAction.UpdateCourseSuccess) => [
      new fromAction.RaiseAlert({
        type: 'success',
        content: 'The course has been updated successfully.'
      }),
      new fromAction.GetCourse({ courseId: action.payload.id })
    ])
  );

  @Effect()
  updateCourseFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.UPDATE_COURSE_FAILURE),
    map(
      () =>
        new fromAction.RaiseAlert({
          type: 'danger',
          content: 'Failed to update the course.'
        })
    )
  );
}
