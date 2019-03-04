import { Action } from '@ngrx/store';

export const GET_COURSES = '[Courses] Get Courses';
export const GET_COURSES_SUCCESS = '[Courses] Get Courses Success';
export const GET_COURSES_FAILURE = '[Courses] Get Courses Failure';

export const CREATE_COURSE = '[Courses] Create Course';
export const CREATE_COURSE_SUCCESS = '[Courses] Create Course Success';
export const CREATE_COURSE_FAILURE = '[Courses] Create Course Failure';

export const DELETE_COURSE = '[Courses] Delete Course';
export const DELETE_COURSE_SUCCESS = '[Courses] Delete Course Success';
export const DELETE_COURSE_FAILURE = '[Courses] Delete Course Failure';

export class GetCourses implements Action {
  readonly type = GET_COURSES;
  constructor(public payload: any = {}) {}
}

export class GetCoursesSuccess implements Action {
  readonly type = GET_COURSES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetCoursesFailure implements Action {
  readonly type = GET_COURSES_FAILURE;
  constructor(public payload: any = {}) {}
}

export class CreateCourse implements Action {
  readonly type = CREATE_COURSE;
  constructor(
    public payload: {
      name: string;
      endDate: Date;
      description: string;
      hasPlanningPrompt: boolean;
      planningPrompt: string;
    }
  ) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CREATE_COURSE_SUCCESS;
  constructor(public payload: any) {}
}

export class CreateCourseFailure implements Action {
  readonly type = CREATE_COURSE_FAILURE;
  constructor(public payload: any = {}) {}
}

export class DeleteCourse implements Action {
  readonly type = DELETE_COURSE;
  constructor(public payload: any) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = DELETE_COURSE_SUCCESS;
  constructor(public payload: any) {}
}

export class DeleteCourseFailure implements Action {
  readonly type = DELETE_COURSE_FAILURE;
  constructor(public payload: any = {}) {}
}

export type CoursesAction =
  | GetCourses
  | GetCoursesSuccess
  | GetCoursesFailure
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseFailure
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseFailure;
