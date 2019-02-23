import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromState from '../states';

export const alertStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.AlertState
> = createFeatureSelector<fromState.AlertState>('alert');

export const alertEntitiesSelector: MemoizedSelector<
  fromState.StoreState,
  any
> = createSelector(
  alertStateSelector,
  fromState.getAlertEntities
);