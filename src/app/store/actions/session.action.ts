import { Action } from '@ngrx/store';
import { UserModel } from '../../models';

export const SET_CURRENT_USER = '[Session] Set Current User';
export const SET_CURRENT_SESSION = '[Session] Set Current Session';
export const CLEAR_CURRENT_USER = '[Session] Clear Current User';
export const CLEAR_CURRENT_SESSION = '[Session] Clear Current Session';

export class SetCurrentUser implements Action {
  readonly type = SET_CURRENT_USER;
  constructor(public currentUser: UserModel) {}
}

export class SetCurrentSession implements Action {
  readonly type = SET_CURRENT_SESSION;
  constructor(public currentSession) {}
}

export class ClearCurrentUser implements Action {
  readonly type = CLEAR_CURRENT_USER;
  constructor() {}
}

export class ClearCurrentSession implements Action {
  readonly type = CLEAR_CURRENT_SESSION;
  constructor() {}
}

export type SessionAction =
  | SetCurrentUser
  | SetCurrentSession
  | ClearCurrentUser
  | ClearCurrentSession;
