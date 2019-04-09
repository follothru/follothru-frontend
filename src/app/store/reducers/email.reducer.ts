import * as fromState from '../states';
import * as fromAction from '../actions';

export function EmailReducer(
  state: fromState.EmailState = fromState.initialEmailState,
  action: fromAction.EmailAction
): fromState.EmailState {
  switch (action.type) {
    case fromAction.GET_EMAIL_TEMPLATES:
      return { ...state, isLoading: true };

    case fromAction.GET_EMAIL_TEMPLATES_SUCCESS:
      return {
        ...state,
        emailTemplates: action.templates,
        isLoading: false
      };

    case fromAction.GET_EMAIL_TEMPLATES_FAILURE:
      return {
        ...state,
        emailTemplates: [],
        isLoading: false
      };
  }
  return state;
}
