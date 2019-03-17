import { ReminderModel, SubreminderModel } from '../../models';

export interface RemindersState {
  remindersEntities: ReminderModel[];
  subreminderCategories: any;
  eventCategories: any;
  upcomingReminders: SubreminderModel[];
  isLoading: boolean;
  focusedSubreminders: any;
}

export const initialRemindersState: RemindersState = {
  remindersEntities: [],
  subreminderCategories: {},
  eventCategories: {},
  upcomingReminders: [],
  isLoading: false,
  focusedSubreminders: null
};

export const getReminderEntities = (state: RemindersState) =>
  state.remindersEntities;

export const getSubreminderCategories = (state: RemindersState) =>
  state.subreminderCategories;

export const getEventCategories = (state: RemindersState) =>
  state.eventCategories;

export const getUpcomingReminders = (state: RemindersState) =>
  state.upcomingReminders;

export const getFocusedSubreminders = (state: RemindersState) =>
  state.focusedSubreminders;

export const getRemindersIsLoading = (state: RemindersState) => state.isLoading;
