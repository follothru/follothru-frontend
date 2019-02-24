import * as fromState from '../states';
import * as fromAction from '../actions';

export function AuthReducer(
  state: fromState.AuthState = fromState.initialAuthState,
  action: fromAction.AuthAction
): fromState.AuthState {
  switch (action.type) {
    case fromAction.SIGN_IN:
    case fromAction.RESUME_SESSION:
      return {
        ...state,
        isLoading: true
      };

    case fromAction.SIGN_IN_SUCCESS:
    case fromAction.RESUME_SESSION_SUCCESS:
      return {
        ...state,
        authEntities: action.payload,
        isLoading: false
      };

    case fromAction.SIGN_IN_FAILURE:
    case fromAction.RESUME_SESSION_FAILURE:
      return {
        ...state,
        isLoading: false
      };
  }
  return state;
}
