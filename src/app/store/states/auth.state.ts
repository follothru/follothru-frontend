export interface AuthState {
  authEntities: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

export const initialAuthState: AuthState = {
  authEntities: {},
  isLoading: false,
  isSuccess: false,
  isError: false
};

export const getAuthEntities = (state: AuthState) => state.authEntities;

export const isAuthLoading = (state: AuthState) => state.isLoading;

export const isAuthSuccess = (state: AuthState) => state.isSuccess;

export const isAuthError = (state: AuthState) => state.isError;
