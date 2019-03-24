import { Action } from '@ngrx/store';

import { UserModel } from '../../models';

export const GET_USERS = '[User] Get Users';
export const GET_USERS_SUCCESS = '[User] Get Users Success';
export const GET_USERS_FAILURE = '[User] Get Users Failure';

export const REMOVE_USER = '[User] Remove User';
export const REMOVE_USER_SUCCESS = '[User] Remove User Success';
export const REMOVE_USER_FAILURE = '[User] Remove User Failure';

export const ASSIGN_ADMIN = '[User] Assign Admin';
export const ASSIGN_ADMIN_SUCCSSS = '[User] Assign Admin Success';
export const ASSIGN_ADMIN_FAILURE = '[User] Assign Admin Failure';

export const REMOVE_ADMIN = '[User] Remove Admin';
export const REMOVE_ADMIN_SUCCESS = '[User] Remove Admin Success';
export const REMOVE_ADMIN_FAILURE = '[User] Remove Admin Failure';

export class GetUsers implements Action {
  readonly type = GET_USERS;
  constructor() {}
}

export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public users: UserModel[]) {}
}

export class GetUsersFailure implements Action {
  readonly type = GET_USERS_FAILURE;
  constructor(public error: any) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public userId: string) {}
}

export class RemoveUserSuccess implements Action {
  readonly type = REMOVE_USER_SUCCESS;
  constructor() {}
}

export class RemoveUserFailure implements Action {
  readonly type = REMOVE_USER_FAILURE;
  constructor(public error: any) {}
}

export class AssignAdmin implements Action {
  readonly type = ASSIGN_ADMIN;
  constructor(public userId: string) {}
}

export class AssignAdminSuccess implements Action {
  readonly type = ASSIGN_ADMIN_SUCCSSS;
  constructor() {}
}

export class AssignAdminFailure implements Action {
  readonly type = ASSIGN_ADMIN_FAILURE;
  constructor(public error: any) {}
}

export class RemoveAdmin implements Action {
  readonly type = REMOVE_ADMIN;
  constructor(public userId: string) {}
}

export class RemoveAdminSuccess implements Action {
  readonly type = REMOVE_ADMIN_SUCCESS;
  constructor() {}
}

export class RemoveAdminFailure implements Action {
  readonly type = REMOVE_ADMIN_FAILURE;
  constructor(public error: any) {}
}

export type UserAction =
  | GetUsers
  | GetUsersSuccess
  | GetUsersFailure
  | RemoveUser
  | RemoveUserSuccess
  | RemoveUserFailure
  | AssignAdmin
  | AssignAdminSuccess
  | AssignAdminFailure
  | RemoveAdmin
  | RemoveAdminSuccess
  | RemoveAdminFailure;
