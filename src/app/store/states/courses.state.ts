export interface CoursesState {
  coursesEntities: any;
  isLoading: boolean;
}

export const initialCoursesState: CoursesState = {
  coursesEntities: [],
  isLoading: false
};

export const getCoursesEntities = (state: CoursesState) =>
  state.coursesEntities;

export const getCoursesIsLoading = (state: CoursesState) => state.isLoading;
