export interface CourseState {
  courseEntities: any;
  enrolledStudents: {
    isLoading: boolean;
    entities: any[];
  };
  isLoading: boolean;
}

export const initialCourseState: CourseState = {
  courseEntities: {},
  enrolledStudents: { isLoading: false, entities: [] },
  isLoading: false
};

export const getCourseEntities = (state: CourseState) => state.courseEntities;

export const getCourseEnrolledStudents = (state: CourseState) =>
  state.enrolledStudents.entities;

export const getCourseEnrollStudentsIsLoading = (state: CourseState) =>
  state.enrolledStudents.isLoading;

export const getCourseIsLoading = (state: CourseState) => state.isLoading;
