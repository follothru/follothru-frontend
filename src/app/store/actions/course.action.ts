import { Action } from '@ngrx/store';

export const GET_COURSE = '[Course] Get Course';
export const GET_COURSE_SUCCESS = '[Course] Get Course Success';
export const GET_COURSE_FAILURE = '[Course] Get Course Failure';

export const UPDATE_COURSE = '[Course] Update Course';
export const UPDATE_COURSE_SUCCESS = '[Course] Update Course Success';
export const UPDATE_COURSE_FAILURE = '[Course] Update Course Failure';

export class GetCourse implements Action {
  readonly type = GET_COURSE;
  constructor(public payload: any) {}
}

export class GetCourseSuccess implements Action {
  readonly type = GET_COURSE_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCourseFailure implements Action {
  readonly type = GET_COURSE_FAILURE;
  constructor(public payload: any = {}) {}
}

export class UpdateCourse implements Action {
  readonly type = UPDATE_COURSE;
  constructor(public payload: any) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = UPDATE_COURSE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateCourseFailure implements Action {
  readonly type = UPDATE_COURSE_FAILURE;
  constructor(public payload: any = {}) {}
}

export type CourseAction =
  | GetCourse
  | GetCourseSuccess
  | GetCourseFailure
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseFailure;
