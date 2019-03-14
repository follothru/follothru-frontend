import { ReminderModel } from '../../models';

export interface RemindersState {
  remindersEntities: ReminderModel[];
  categories: any;
  upcomingReminders: ReminderModel[];
  isLoading: boolean;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  categories: {},
  upcomingReminders: [],
  isLoading: false
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getRemindersCategories = (state: RemindersState) =>
  state.categories;

export const getUpcomingReminders = (state: RemindersState) =>
  state.upcomingReminders;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;
