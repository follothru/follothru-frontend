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
        subreminderCategories: action.payload.categories
          ? action.payload.categories.subreminders
          : {},
        eventCategories: action.payload.categories
          ? action.payload.categories.events
          : {}
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

    case fromAction.FOCUS_SUBREMINDERS: {
      const { subreminders } = action;
      if (subreminders.length <= 0) {
        return { ...state, focusedSubreminders: null };
      }
      const map = subreminders.reduce((prev, subreminder) => {
        prev[subreminder.id] = subreminder;
        return prev;
      }, {});
      return { ...state, focusedSubreminders: map };
    }

    case fromAction.CLEAR_SUBREMINDER_FOCUS:
      return { ...state, focusedSubreminders: null };
  }
  return state;
}
