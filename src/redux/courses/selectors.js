import { createSelector } from "reselect";

export const selectCoursesDomain = state => state.courses;

export const coursesSelector = createSelector(
  selectCoursesDomain,
  substate => substate.courses
);

export const coursesLoadingSelector = createSelector(
  selectCoursesDomain,
  substate => substate.loading
);
