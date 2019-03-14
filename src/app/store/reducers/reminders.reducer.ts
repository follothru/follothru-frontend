import * as fromState from '../states';
import * as fromAction from '../actions';

export function RemindersReducer(
  state: fromState.RemindersState = fromState.initialRemindersState,
  action: fromAction.RemindersAction
): fromState.RemindersState {
  switch (action.type) {
    case fromAction.GET_REMINDERS:
    case fromAction.GET_UPCOMING_REMINDERS:
      return { ...state, isLoading: true };

    case fromAction.GET_REMINDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        remindersEntities: action.payload.reminders
          ? action.payload.reminders
          : [],
        categories: action.payload.categories ? action.payload.categories : {}
      };

    case fromAction.GET_UPCOMING_REMINDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        upcomingReminders: action.payload.reminders
          ? action.payload.reminders
          : []
      };

    case fromAction.GET_REMINDERS_FAILURE:
    case fromAction.GET_UPCOMING_REMINDERS_FAILURE:
      return { ...state, isLoading: false };
  }
  return state;
}
