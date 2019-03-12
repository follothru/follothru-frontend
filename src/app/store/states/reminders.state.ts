import { ReminderModel } from '../../models';

export interface RemindersState {
  remindersEntities: ReminderModel[];
  isLoading: boolean;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  isLoading: false
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;
