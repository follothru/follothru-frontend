import { Action } from '@ngrx/store';

export const RAISE_ALERT = '[Alert] Raise Alert';

export class RaiseAlert implements Action {
  readonly type = RAISE_ALERT;
  constructor(public payload: any) {}
}

export type AlertAction = RaiseAlert;
