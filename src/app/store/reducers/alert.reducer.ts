import * as fromState from '../states';
import * as fromAction from '../actions';

export function AlertReducers(
  state: fromState.AlertState = fromState.initialAlertState,
  action: fromAction.AlertAction
) {
  switch (action.type) {
    case fromAction.RAISE_ALERT: {
      const alertEntities = action.payload;
      return { ...state, alertEntities };
    }
  }
  return state;
}
