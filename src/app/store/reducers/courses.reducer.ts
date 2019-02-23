import * as fromState from '../states';
import * as fromAction from '../actions';

export function CoursesReducer(
  state: fromState.CoursesState = fromState.initialCoursesState,
  action: fromAction.CoursesAction
): fromState.CoursesState {
  switch (action.type) {
    case fromAction.GET_COURSES:
      return { ...state, isLoading: true, error: null };

    case fromAction.GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesEntities: action.payload,
        isLoading: false,
        expired: false,
        error: null
      };

    case fromAction.CREATE_COURSE_SUCCESS:
    case fromAction.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        expired: true
      };

    case fromAction.GET_COURSES_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
  }
  return state;
}
