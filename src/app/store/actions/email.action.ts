import { Action } from '@ngrx/store';
import { EmailTemplateModel } from '../../models';

export const GET_EMAIL_TEMPLATES = '[Email] Get Email Templates';
export const GET_EMAIL_TEMPLATES_SUCCESS =
  '[Email] Get Email Templates Success';
export const GET_EMAIL_TEMPLATES_FAILURE =
  '[Email] Get Email Templates Failure';

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

export type EmailAction =
  | GetEmailTemplates
  | GetEmailTemplatesSuccess
  | GetEmailTemplatesFailure;
