import { types } from "./actions";

const remindersInitialState = {
  loading: false,
  error: null,
  reminders: []
};

const remindersReducer = (state = remindersInitialState, action) => {
  switch (action.type) {
    case types.GET_REMINDERS:
      return { ...state, loading: true };

    case types.GET_REMINDERS_SUCCESS:
      return { ...state, loading: false, error: null, reminders: action.reminders };

    case types.GET_REMINDERS_FAILURE:
      return { ...state, loading: false, reminders: [], error: action.error };

    default:
      break;
  }
  return state;
};

export default remindersReducer;
