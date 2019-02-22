import * as fromState from '../states';
import * as fromAction from '../actions';

export function AuthReducer(
  state: fromState.AuthState = fromState.initialAuthState,
  action: fromAction.AuthAction
) {
  switch (action.type) {
    case fromAction.SIGN_IN:
    case fromAction.SIGN_OUT:
    case fromAction.RESUME_SESSION:
      return { ...state, isLoading: true, isSuccess: false, isError: false };

    case fromAction.SIGN_IN_SUCCESS:
    case fromAction.RESUME_SESSION_SUCCESS: {
      const authEntities = action.payload;
      return {
        ...state,
        authEntities,
        isLoading: false,
        isSuccess: true,
        isError: false
      };
    }

    case fromAction.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false
      };

    case fromAction.SIGN_IN_FAILURE:
    case fromAction.SIGN_OUT_FAILURE:
    case fromAction.RESUME_SESSION_FAILURE:
      return { ...state, isLoading: false, isSuccess: false, isError: true };
  }
  return state;
}
