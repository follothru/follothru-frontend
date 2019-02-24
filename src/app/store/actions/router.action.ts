import { Action } from '@ngrx/store';

export const ROUTER_ENTITY = '[Router]';

export const ROUTER_NAVIGATE = `${ROUTER_ENTITY} Router Navigate`;

export class RouterNavigate implements Action {
  readonly type = ROUTER_NAVIGATE;
  constructor(public path: string) {}
}

export type RouterAction = RouterNavigate;
