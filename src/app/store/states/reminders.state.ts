import { ReminderModel } from '../../models';

export interface RemindersState {
  remindersEntities: ReminderModel[];
  categories: any;
  upcommingReminders: ReminderModel[];
  isLoading: boolean;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  categories: {},
  upcommingReminders: [],
  isLoading: false
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getRemindersCategories = (state: RemindersState) =>
  state.categories;

export const getUpcommingReminders = (state: RemindersState) =>
  state.upcommingReminders;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;
