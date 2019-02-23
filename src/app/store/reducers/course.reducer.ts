import * as fromState from '../states';
import * as fromAction from '../actions';

export function CourseReducer(
  state: fromState.CourseState = fromState.initialCourseState,
  action: fromAction.CourseAction
): fromState.CourseState {
  switch (action.type) {
    case fromAction.GET_COURSE:
      return { ...state, isLoading: true, error: null };

    case fromAction.GET_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        expired: false,
        courseEntities: action.payload,
        error: null
      };
    }

    case fromAction.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        expired: true,
        error: null
      };

    case fromAction.GET_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
  }
  return state;
}
