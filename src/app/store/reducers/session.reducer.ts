import * as fromAction from '../actions';
import * as fromState from '../states';

export function SessionReducer(
  state: fromState.SessionState = fromState.initialSessionState,
  action: fromAction.SessionAction
): fromState.SessionState {
  switch (action.type) {
    case fromAction.SET_CURRENT_SESSION:
      return { ...state, currentSession: action.currentSession };

    case fromAction.SET_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };

    case fromAction.CLEAR_CURRENT_SESSION:
      return { ...state, currentSession: null };

    case fromAction.CLEAR_CURRENT_USER:
      return { ...state, currentUser: null };
  }
  return state;
}
