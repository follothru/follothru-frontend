import * as fromState from '../states';
import * as fromAction from '../actions';

export function CourseReducer(
  state: fromState.CourseState = fromState.initialCourseState,
  action: fromAction.CourseAction
): fromState.CourseState {
  switch (action.type) {
    case fromAction.GET_COURSE:
      return { ...state, isLoading: true };

    case fromAction.GET_COURSE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        courseEntities: action.payload
      };
    }

    case fromAction.GET_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
  }
  return state;
}
