import * as fromState from '../states';
import * as fromAction from '../actions';

export function RemindersReducer(
  state: fromState.RemindersState = fromState.initialRemindersState,
  action: fromAction.RemindersAction
): fromState.RemindersState {
  switch (action.type) {
    case fromAction.GET_REMINDERS:
    case fromAction.DELETE_REMINDERS:
    case fromAction.CREATE_REMINDERS:
      return { ...state, isLoading: true };

    case fromAction.GET_REMINDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        expired: false,
        remindersEntities: action.payload,
        error: null
      };

    case fromAction.CREATE_REMINDERS_SUCCESS:
    case fromAction.DELETE_REMINDERS_SUCCESS:
      return { ...state, isLoading: false, expired: true, error: null };

    case fromAction.GET_REMINDERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
  }
  return state;
}
