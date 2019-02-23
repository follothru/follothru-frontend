export interface AuthState {
  authEntities: any;
  error: any;
  isLoading: boolean;
  isSuccess: boolean;
}

export const initialAuthState: AuthState = {
  authEntities: {},
  error: null,
  isLoading: false,
  isSuccess: false
};

export const getAuthEntities = (state: AuthState) => state.authEntities;

export const getAuthError = (state: AuthState) => state.error;

export const isAuthLoading = (state: AuthState) => state.isLoading;

export const isAuthSuccess = (state: AuthState) => state.isSuccess;
