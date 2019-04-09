import {
  MemoizedSelector,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { EmailTemplateModel } from '../../models';

import * as fromState from '../states';

export const emailStateSelector: MemoizedSelector<
  fromState.StoreState,
  fromState.EmailState
> = createFeatureSelector<fromState.EmailState>('email');

export const emailTemplatesSelector: MemoizedSelector<
  fromState.StoreState,
  EmailTemplateModel[]
> = createSelector(
  emailStateSelector,
  fromState.getEmailTemplates
);

export const emailIsLoadingsSelector: MemoizedSelector<
  fromState.StoreState,
  boolean
> = createSelector(
  emailStateSelector,
  fromState.getEmailIsLoading
);
