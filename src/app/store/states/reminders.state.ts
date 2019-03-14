import { ReminderModel } from '../../models';

export interface RemindersState {
  remindersEntities: ReminderModel[];
  categories: any;
  isLoading: boolean;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  categories: {},
  isLoading: false
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getRemindersCategories = (state: RemindersState) =>
  state.categories;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;
