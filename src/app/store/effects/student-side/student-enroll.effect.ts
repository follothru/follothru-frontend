import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { StudentEnrollService } from '../../../services';
import { RouterNavigate } from '../../actions';

import * as fromAction from '../../actions';

@Injectable()
export class StudentEnrollEffects {
  constructor(
    private actions$: Actions,
    private studentEnrollService: StudentEnrollService
  ) {}

  @Effect()
  getEnrollStatus$: Observable<
    fromAction.StudentEnrollAction
  > = this.actions$.pipe(
    ofType(fromAction.GET_ENROLL_STATUS),
    switchMap((action: fromAction.GetEnrollStatus) =>
      this.studentEnrollService
        .getStudentEnrollStatus(action.courseId, action.studentId)
        .pipe(
          map(result => new fromAction.GetEnrollStatusSuccess(result)),
          catchError(err => of(new fromAction.GetEnrollStatusFailure(err)))
        )
    )
  );

  @Effect()
  getEnrollStatusFailure$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.GET_ENROLL_STATUS_FAILURE),
    map(() => new RouterNavigate('/404'))
  );

  @Effect()
  getCourseEnrollInfo$: Observable<
    fromAction.StudentEnrollAction
  > = this.actions$.pipe(
    ofType(fromAction.GET_COURSE_ENROLL_INFO),
    switchMap((action: fromAction.GetCourseEnrollInfo) =>
      this.studentEnrollService.getCourseEnrollInfo(action.courseId).pipe(
        map(result => new fromAction.GetCourseEnrollInfoSuccess(result)),
        catchError(err => of(new fromAction.GetCourseEnrollInfoFailure(err)))
      )
    )
  );

  @Effect()
  studentEnroll$: Observable<
    fromAction.StudentEnrollAction
  > = this.actions$.pipe(
    ofType(fromAction.STUDENT_ENROLL),
    switchMap((action: fromAction.StudentEnroll) =>
      this.studentEnrollService
        .studentEnroll(action.courseId, action.data)
        .pipe(
          map(result => new fromAction.StudentEnrollSuccess(result)),
          catchError(err => of(new fromAction.StudentEnrollFailure(err.error)))
        )
    )
  );

  @Effect()
  studentEnrollSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(fromAction.STUDENT_ENROLL_SUCCESS),
    map(
      (action: fromAction.StudentEnrollSuccess) =>
        new fromAction.RouterNavigate(`/studentEnroll/verifyEmail`, {
          queryParams: {
            student: action.result.studentId,
            course: action.result.courseId
          }
        })
    )
  );

  @Effect()
  studentEnrollFailure$: Observable<Action | null> = this.actions$.pipe(
    ofType(fromAction.STUDENT_ENROLL_FAILURE),
    map(
      (action: fromAction.StudentEnrollFailure) =>
        new fromAction.RaiseAlert({
          type: 'danger',
          message: action.error.message
        })
    )
  );
}
