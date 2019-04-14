import * as fromState from '../../states';
import * as fromAction from '../../actions';

export function StudentEnrollReducers(
  state: fromState.StudentEnrollState = fromState.initialStudentEnrollState,
  action: fromAction.StudentEnrollAction
): fromState.StudentEnrollState {
  switch (action.type) {
    case fromAction.GET_ENROLL_STATUS:
    case fromAction.GET_COURSE_ENROLL_INFO: {
      return { ...state, isLoading: true };
    }

    case fromAction.GET_COURSE_ENROLL_INFO_SUCCESS:
      return { ...state, isLoading: false, courseEnrollInfo: action.payload };

    case fromAction.GET_COURSE_ENROLL_INFO_FAILURE:
      return { ...state, isLoading: false };

    case fromAction.GET_ENROLL_STATUS_SUCCESS:
      return { ...state, isLoading: false, enrollStatus: action.result };

    case fromAction.GET_ENROLL_STATUS_FAILURE:
      return { ...state, isLoading: false, enrollStatus: null };
  }
  return state;
}
