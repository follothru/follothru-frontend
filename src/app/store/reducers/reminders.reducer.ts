import * as fromState from '../states';
import * as fromAction from '../actions';

export function RemindersReducer(
  state: fromState.RemindersState = fromState.initialRemindersState,
  action: fromAction.RemindersAction
): fromState.RemindersState {
  switch (action.type) {
    case fromAction.GET_REMINDERS:
      return { ...state, isLoading: true };

    case fromAction.GET_REMINDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        remindersEntities: action.payload
      };
  }
  return state;
}
