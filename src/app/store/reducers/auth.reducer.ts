import * as fromState from '../states';
import * as fromAction from '../actions';

export function AuthReducer(
  state: fromState.AuthState = fromState.initialAuthState,
  action: fromAction.AuthAction
): fromState.AuthState {
  switch (action.type) {
    case fromAction.SIGN_IN:
    case fromAction.SIGN_OUT:
    case fromAction.RESUME_SESSION:
      return {
        ...state,
        authEntities: { type: action.type },
        error: null,
        isLoading: true,
        isSuccess: false
      };

    case fromAction.SIGN_IN_SUCCESS:
    case fromAction.RESUME_SESSION_SUCCESS: {
      const authEntities = action.payload;
      authEntities.type = action.type;
      return {
        ...state,
        authEntities,
        error: null,
        isLoading: false,
        isSuccess: true
      };
    }

    case fromAction.SIGN_OUT_SUCCESS:
      return {
        ...state,
        authEntities: { type: action.type },
        error: null,
        isLoading: false,
        isSuccess: true
      };

    case fromAction.SIGN_IN_FAILURE:
    case fromAction.SIGN_OUT_FAILURE:
    case fromAction.RESUME_SESSION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isSuccess: false
      };
  }
  return state;
}
