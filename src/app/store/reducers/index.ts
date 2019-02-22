import { ActionReducerMap } from '@ngrx/store';

import { AuthReducer } from './auth.reducer';
import { AlertReducers } from './alert.reducer';

import * as fromState from '../states';

export * from './auth.reducer';
export * from './alert.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  auth: AuthReducer,
  alert: AlertReducers
};
