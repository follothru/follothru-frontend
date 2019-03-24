import * as fromAction from '../actions';
import * as fromState from '../states';

export function UserReducer(
  state: fromState.UserState = fromState.initialUserState,
  action: fromAction.UserAction
): fromState.UserState {
  switch (action.type) {
    case fromAction.GET_USERS:
      return { ...state, isLoading: true };

    case fromAction.GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.users };
  }
  return state;
}
