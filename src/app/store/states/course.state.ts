export interface CourseState {
  courseEntities: any;
  isLoading: boolean;
}

export const initialCourseState: CourseState = {
  courseEntities: {},
  isLoading: false
};

export const getCourseEntities = (state: CourseState) => state.courseEntities;

export const getCourseIsLoading = (state: CourseState) => state.isLoading;
