export interface RemindersState {
  remindersEntities: [];
  isLoading: boolean;
  expired: boolean;
  error: any;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  isLoading: false,
  expired: false,
  error: null
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;

export const getRemindersIsExpired = (state: RemindersState) => state.expired;

export const getRemindersError = (state: RemindersState) => state.error;
