import { Action } from '@ngrx/store';
import { StudentEnrollStatus } from '../../states';

export const STUDENT_ENROLL = '[Enroll] Student Enroll';
export const STUDENT_ENROLL_SUCCESS = '[Enroll] Student Enroll Success';
export const STUDENT_ENROLL_FAILURE = '[Enroll] Student Enroll Failure';

export const GET_ENROLL_STATUS = '[Enroll] Get Enroll Status';
export const GET_ENROLL_STATUS_SUCCESS = '[Enroll] Get Enroll Status Success';
export const GET_ENROLL_STATUS_FAILURE = '[Enroll] Get Enroll Status Failure';

export const GET_COURSE_ENROLL_INFO = '[Enroll] Get Course Enroll Info';
export const GET_COURSE_ENROLL_INFO_SUCCESS =
  '[Enroll] Get Course Enroll Info Success';
export const GET_COURSE_ENROLL_INFO_FAILURE =
  '[Enroll] Get Course Enroll Info Failure';

export class GetEnrollStatus implements Action {
  readonly type = GET_ENROLL_STATUS;
  constructor(public courseId: string, public studentId: string) {}
}

export class GetEnrollStatusSuccess implements Action {
  readonly type = GET_ENROLL_STATUS_SUCCESS;
  constructor(public result: StudentEnrollStatus) {}
}

export class GetEnrollStatusFailure implements Action {
  readonly type = GET_ENROLL_STATUS_FAILURE;
  constructor(public error: any = {}) {}
}

export class GetCourseEnrollInfo implements Action {
  readonly type = GET_COURSE_ENROLL_INFO;
  constructor(public courseId: string) {}
}

export class GetCourseEnrollInfoSuccess implements Action {
  readonly type = GET_COURSE_ENROLL_INFO_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCourseEnrollInfoFailure implements Action {
  readonly type = GET_COURSE_ENROLL_INFO_FAILURE;
  constructor(public error: any) {}
}

export class StudentEnroll implements Action {
  readonly type = STUDENT_ENROLL;
  constructor(public courseId: string, public data: any) {}
}

export class StudentEnrollSuccess implements Action {
  readonly type = STUDENT_ENROLL_SUCCESS;
  constructor(public result: any) {}
}

export class StudentEnrollFailure implements Action {
  readonly type = STUDENT_ENROLL_FAILURE;
  constructor(public error: any) {}
}

export type StudentEnrollAction =
  | GetEnrollStatus
  | GetEnrollStatusSuccess
  | GetEnrollStatusFailure
  | GetCourseEnrollInfo
  | GetCourseEnrollInfoSuccess
  | GetCourseEnrollInfoFailure
  | StudentEnroll
  | StudentEnrollSuccess
  | StudentEnrollFailure;
