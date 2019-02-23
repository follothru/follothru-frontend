export interface CoursesState {
  coursesEntities: any;
  isLoading: boolean;
  expired: boolean;
  error: any;
}

export const initialCoursesState: CoursesState = {
  coursesEntities: [],
  isLoading: false,
  expired: false,
  error: null
};

export const getCoursesEntities = (state: CoursesState) =>
  state.coursesEntities;

export const getCoursesIsLoading = (state: CoursesState) => state.isLoading;

export const getCoursesExpired = (state: CoursesState) => state.expired;

export const getCoursesError = (state: CoursesState) => state.error;
