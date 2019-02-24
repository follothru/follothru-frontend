export interface AuthState {
  authEntities: any;
  isLoading: boolean;
}

export const initialAuthState: AuthState = {
  authEntities: {},
  isLoading: false
};

export const getAuthEntities = (state: AuthState) => state.authEntities;

export const isAuthLoading = (state: AuthState) => state.isLoading;
