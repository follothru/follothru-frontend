export interface SessionState {
  currentUser: any;
  currentSession: any;
}

export const initialSessionState: SessionState = {
  currentUser: null,
  currentSession: sessionStorage.getItem('user_session')
};

export const getSessionCurrentUser = (state: SessionState) => state.currentUser;

export const getSessionCurrentSession = (state: SessionState) =>
  state.currentSession;