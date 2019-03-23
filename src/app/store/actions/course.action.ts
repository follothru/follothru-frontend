import { Action } from '@ngrx/store';

export const GET_COURSE = '[Course] Get Course';
export const GET_COURSE_SUCCESS = '[Course] Get Course Success';
export const GET_COURSE_FAILURE = '[Course] Get Course Failure';

export const UPDATE_COURSE = '[Course] Update Course';
export const UPDATE_COURSE_SUCCESS = '[Course] Update Course Success';
export const UPDATE_COURSE_FAILURE = '[Course] Update Course Failure';

export const APPROVE_COURSE = '[Course] Approve Course';
export const APPROVE_COURSE_SUCCESS = '[Course] Approve Course Success';
export const APPROVE_COURSE_FAILURE = '[Course] Approve Course Failure';

export const GET_ENROLLED_STUDENTS = '[Course] Get Enrolled Students';
export const GET_ENROLLED_STUDENTS_SUCCSSS =
  '[Course] Get Enrolled Students Success';
export const GET_ENROLLED_STUDENTS_FAILURE =
  '[Course] Get Enrolled Students Failure';

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
  constructor(
    public payload: {
      courseId: string;
      name: string;
      endDate: Date;
      hasPlanningPrompt: boolean;
      planningPrompt: string;
    }
  ) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = UPDATE_COURSE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateCourseFailure implements Action {
  readonly type = UPDATE_COURSE_FAILURE;
  constructor(public payload: any = {}) {}
}

export class ApproveCourse implements Action {
  readonly type = APPROVE_COURSE;
  constructor(public courseId: string) {}
}

export class ApproveCourseSuccess implements Action {
  readonly type = APPROVE_COURSE_SUCCESS;
  constructor(public courseId: string) {}
}

export class ApproveCourseFailure implements Action {
  readonly type = APPROVE_COURSE_FAILURE;
  constructor(public error: any) {}
}

export class GetEnrolledStudents implements Action {
  readonly type = GET_ENROLLED_STUDENTS;
  constructor(public couseId: string) {}
}

export class GetEnrolledStudentsSuccess implements Action {
  readonly type = GET_ENROLLED_STUDENTS_SUCCSSS;
  constructor(public students: any[]) {}
}

export class GetEnrolledStudentsFailure implements Action {
  readonly type = GET_ENROLLED_STUDENTS_FAILURE;
  constructor(public error: any) {}
}

export type CourseAction =
  | GetCourse
  | GetCourseSuccess
  | GetCourseFailure
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseFailure
  | ApproveCourse
  | ApproveCourseSuccess
  | ApproveCourseFailure
  | GetEnrolledStudents
  | GetEnrolledStudentsSuccess
  | GetEnrolledStudentsFailure;
