import { Action } from '@ngrx/store';
import { EmailTemplateModel } from '../../models';

export const GET_EMAIL_TEMPLATES = '[Email] Get Email Templates';
export const GET_EMAIL_TEMPLATES_SUCCESS =
  '[Email] Get Email Templates Success';
export const GET_EMAIL_TEMPLATES_FAILURE =
  '[Email] Get Email Templates Failure';

export const SET_REMINDER_EMAIL = '[Email] Set Reminder Email';
export const SET_REMINDER_EMAIL_SUCCESS = '[Email] Set Reminder Email Success';
export const SET_REMINDER_EMAIL_FAILURE = '[Email] Set Reminder Email Failure';

export const SET_SUBREMINDER_EMAIL = '[Email] Set Subreminder Email';
export const SET_SUBREMINDER_EMAIL_SUCCESS =
  '[Email] Set Subreminder Email Success';
export const SET_SUBREMINDER_EMAIL_FAILURE =
  '[Email] Set Subreminder Email Failure';

export class GetEmailTemplates implements Action {
  readonly type = GET_EMAIL_TEMPLATES;
  constructor() {}
}

export class GetEmailTemplatesSuccess implements Action {
  readonly type = GET_EMAIL_TEMPLATES_SUCCESS;
  constructor(public templates: EmailTemplateModel[]) {}
}

export class GetEmailTemplatesFailure implements Action {
  readonly type = GET_EMAIL_TEMPLATES_FAILURE;
  constructor(public error: any) {}
}

export class SetReminderEmail implements Action {
  readonly type = SET_REMINDER_EMAIL;
  constructor(
    public reminderId: string,
    public templateIds: string[],
    public values?: any
  ) {}
}

export class SetReminderEmailSuccess implements Action {
  readonly type = SET_REMINDER_EMAIL_SUCCESS;
  constructor() {}
}

export class SetReminderEmailFailure implements Action {
  readonly type = SET_REMINDER_EMAIL_FAILURE;
  constructor(public error: any) {}
}

export class SetSubreminderEmail implements Action {
  readonly type = SET_SUBREMINDER_EMAIL;
  constructor(
    public subreminderId: string,
    public templateIds: string[],
    public values?: any
  ) {}
}

export class SetSubreminderEmailSuccess implements Action {
  readonly type = SET_SUBREMINDER_EMAIL_SUCCESS;
  constructor() {}
}

export class SetSubreminderEmailFailure implements Action {
  readonly type = SET_SUBREMINDER_EMAIL_FAILURE;
  constructor(public error: any) {}
}

export type EmailAction =
  | GetEmailTemplates
  | GetEmailTemplatesSuccess
  | GetEmailTemplatesFailure
  | SetReminderEmail
  | SetReminderEmailSuccess
  | SetReminderEmailFailure
  | SetSubreminderEmail
  | SetSubreminderEmailSuccess
  | SetSubreminderEmailFailure;
