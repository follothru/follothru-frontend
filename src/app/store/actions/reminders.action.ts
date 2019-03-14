import { Action } from '@ngrx/store';

import { ReminderModel } from '../../models';

export const GET_REMINDERS = '[Reminders] Get Reminders';
export const GET_REMINDERS_SUCCESS = '[Reminders] Get Reminders Success';
export const GET_REMINDERS_FAILURE = '[Reminders] Get Reminders Failure';

export const CREATE_REMINDERS = '[Reminders] Create Reminders';
export const CREATE_REMINDERS_SUCCESS = '[Reminders] Create Reminders Success';
export const CREATE_REMINDERS_FAILURE = '[Reminders] Create Reminders Failure';

export const DELETE_REMINDERS = '[Reminders] Delete Reminders';
export const DELETE_REMINDERS_SUCCESS = '[Reminders] Delete Reminders Success';
export const DELETE_REMINDERS_FAILURE = '[Reminders] Delete Reminders Failure';

export const GET_UPCOMING_REMINDERS = '[Reminders] Get Upcoming Reminders';
export const GET_UPCOMING_REMINDERS_SUCCESS =
  '[Reminders] Get Upcoming Reminders Success';
export const GET_UPCOMING_REMINDERS_FAILURE =
  '[Reminders] Get Upcoming Reminders Failure';

export class GetReminders implements Action {
  readonly type = GET_REMINDERS;
  constructor(public payload: any) {}
}

export class GetRemindersSuccess implements Action {
  readonly type = GET_REMINDERS_SUCCESS;
  constructor(
    public payload: {
      reminders: ReminderModel[];
      categories: any;
    }
  ) {}
}

export class GetRemindersFailure implements Action {
  readonly type = GET_REMINDERS_FAILURE;
  constructor(public payload: any) {}
}

export class CreateReminders implements Action {
  readonly type = CREATE_REMINDERS;
  constructor(public payload: any) {}
}

export class CreateRemindersSuccess implements Action {
  readonly type = CREATE_REMINDERS_SUCCESS;
  constructor(public payload: any, public courseId: string) {}
}

export class CreateRemindersFailure implements Action {
  readonly type = CREATE_REMINDERS_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteReminders implements Action {
  readonly type = DELETE_REMINDERS;
  constructor(public payload: any) {}
}

export class DeleteRemindersSuccess implements Action {
  readonly type = DELETE_REMINDERS_SUCCESS;
  constructor(public payload: string, public courseId: string) {}
}

export class DeleteRemindersFailure implements Action {
  readonly type = DELETE_REMINDERS_FAILURE;
  constructor(public payload: any) {}
}

export class GetUpcomingReminders implements Action {
  readonly type = GET_UPCOMING_REMINDERS;
  constructor() {}
}

export class GetUpcomingRemindersSuccess implements Action {
  readonly type = GET_UPCOMING_REMINDERS_SUCCESS;
  constructor(
    public payload: {
      reminders: ReminderModel[];
    }
  ) {}
}

export class GetUpcomingRemindersFailure implements Action {
  readonly type = GET_UPCOMING_REMINDERS_FAILURE;
  constructor(public payload: any) {}
}

export type RemindersAction =
  | GetReminders
  | GetRemindersSuccess
  | GetRemindersFailure
  | CreateReminders
  | CreateRemindersSuccess
  | CreateRemindersFailure
  | DeleteReminders
  | DeleteRemindersSuccess
  | DeleteRemindersFailure
  | GetUpcomingReminders
  | GetUpcomingRemindersSuccess
  | GetUpcomingRemindersFailure;
