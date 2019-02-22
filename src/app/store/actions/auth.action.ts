import { Action } from '@ngrx/store';

export const SIGN_IN = '[Auth] Sign In';
export const SIGN_IN_SUCCESS = '[Auth] Sign In Success';
export const SIGN_IN_FAILURE = '[Auth] Sign In Failure';

export const SIGN_OUT = '[Auth] Sign Out';
export const SIGN_OUT_SUCCESS = '[Auth] Sign Out Success';
export const SIGN_OUT_FAILURE = '[Auth] Sign Out Failure';

export const RESUME_SESSION = '[Auth] Resume Session';
export const RESUME_SESSION_SUCCESS = '[Auth] Resume Session Success';
export const RESUME_SESSION_FAILURE = '[Auth] Resume Session Failure';

export class SignIn implements Action {
  readonly type = SIGN_IN;
  constructor(public payload: any) {}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload: any) {}
}

export class SignInFailure implements Action {
  readonly type = SIGN_IN_FAILURE;
  constructor() {}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;
  constructor() {}
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
  constructor() {}
}

export class SignOutFailure implements Action {
  readonly type = SIGN_OUT_FAILURE;
  constructor() {}
}

export class ResumeSession implements Action {
  readonly type = RESUME_SESSION;
  constructor() {}
}

export class ResumeSessionSuccess implements Action {
  readonly type = RESUME_SESSION_SUCCESS;
  constructor(public payload: any) {}
}

export class ResumeSessionFailure implements Action {
  readonly type = RESUME_SESSION_FAILURE;
  constructor() {}
}

export type AuthAction =
  | SignIn
  | SignInSuccess
  | SignInFailure
  | SignOut
  | SignOutSuccess
  | SignOutFailure
  | ResumeSession
  | ResumeSessionSuccess
  | ResumeSessionFailure;
