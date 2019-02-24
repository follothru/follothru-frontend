import * as fromState from '../states';
import * as fromAction from '../actions';

export function CoursesReducer(
  state: fromState.CoursesState = fromState.initialCoursesState,
  action: fromAction.CoursesAction
): fromState.CoursesState {
  switch (action.type) {
    case fromAction.GET_COURSES:
      return { ...state, isLoading: true };

    case fromAction.GET_COURSES_SUCCESS:
      return {
        ...state,
        coursesEntities: action.payload,
        isLoading: false
      };
  }
  return state;
}
