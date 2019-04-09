import { EmailTemplateModel } from '../../models';

export interface EmailState {
  emailTemplates: EmailTemplateModel[];
  isLoading: boolean;
}

export const initialEmailState: EmailState = {
  emailTemplates: [],
  isLoading: false
};

export const getEmailTemplates = (state: EmailState) => state.emailTemplates;

export const getEmailIsLoading = (state: EmailState) => state.isLoading;
