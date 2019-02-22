import { ActionReducerMap } from '@ngrx/store';

import { AuthReducer } from './auth.reducer';

import * as fromState from '../states';

export * from './auth.reducer';

export const reducers: ActionReducerMap<fromState.StoreState> = {
  auth: AuthReducer
};
