import * as fromState from '../states';
import * as fromAction from '../actions';

export function CoursesReducer(
  state: fromState.CoursesState = fromState.initialCoursesState,
  action: fromAction.CoursesAction
) {
  switch (action.type) {
    case fromAction.GET_COURSES:
    case fromAction.CREATE_COURSE:
    case fromAction.DELETE_COURSE:
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
        isLoading: false,
        expired: true,
        error: null
      };

    case fromAction.GET_COURSES_FAILURE:
    case fromAction.CREATE_COURSE_FAILURE:
    case fromAction.DELETE_COURSE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
  }
  return state;
}
