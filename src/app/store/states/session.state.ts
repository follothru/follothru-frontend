import { UserModel } from '../../models';

export interface SessionState {
  currentUser: UserModel;
  currentSession: any;
}

export const initialSessionState: SessionState = {
  currentUser: null,
  currentSession: sessionStorage.getItem('user_session')
};

export const getSessionCurrentUser = (state: SessionState) => state.currentUser;

export const getSessionCurrentUserGroups = (state: SessionState) =>
  getSessionCurrentUser(state) ? getSessionCurrentUser(state).groups : null;

export const getSessionCurrentSession = (state: SessionState) =>
  state.currentSession;
