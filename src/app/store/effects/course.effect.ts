import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { CourseService } from '../../services';

import * as fromAction from '../actions';
import * as fromState from '../states';

@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private store: Store<fromState.StoreState>
  ) {}

  @Effect()
  $getCourse: Observable<fromAction.CourseAction> = this.actions$.pipe(
    ofType(fromAction.GET_COURSE),
    switchMap((action: fromAction.GetCourse) =>
      this.courseService.getCourseById(action.payload.courseId).pipe(
        map(result => new fromAction.GetCourseSuccess(result)),
        catchError(err => of(new fromAction.GetCourseFailure(err)))
      )
    )
  );

  @Effect()
  $updateCourse: Observable<fromAction.CourseAction> = this.actions$.pipe(
    ofType(fromAction.UPDATE_COURSE),
    switchMap((action: fromAction.UpdateCourse) =>
      this.courseService
        .updateCourse(
          action.payload.courseId,
          action.payload.name,
          action.payload.description,
          action.payload.endDate
        )
        .pipe(
          tap(() =>
            this.store.dispatch(
              new fromAction.RaiseAlert({
                type: 'success',
                content: `The course '${
                  action.payload.name
                }' has been updated successfully.`
              })
            )
          ),
          map(result => new fromAction.UpdateCourseSuccess(result)),
          catchError(err => of(new fromAction.UpdateCourseFailure(err)))
        )
    )
  );
}
