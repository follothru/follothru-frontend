export interface SubreminderModel {
  id: string;
  name: string;
  dateTime: Date;
  for: EventModel | ActivityModel;
}

export const EVENT_TYPE = 'EVENT';

export const ACTIVITY_TYPE = 'EVENT';

export interface EventModel {
  id: string;
  type: string;
  name: string;
  dateTime: Date;
}

export interface ActivityModel {
  id: string;
  type: string;
  name: string;
  dateTime: Date;
}

export interface ReminderModel {
  id: string;
  name: string;
  course: any;
  subreminders: SubreminderModel[];
  upcomingDisplay: string;
  categories: any;
}
