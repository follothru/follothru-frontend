export interface CourseState {
  courseEntities: any;
  isLoading: boolean;
  expired: boolean;
  error: any;
}

export const initialCourseState: CourseState = {
  courseEntities: {},
  isLoading: false,
  expired: false,
  error: null
};

export const getCourseEntities = (state: CourseState) => state.courseEntities;

export const getCourseIsLoading = (state: CourseState) => state.isLoading;

export const getCourseExpired = (state: CourseState) => state.expired;

export const getCourseError = (state: CourseState) => state.error;
