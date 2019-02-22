import { AuthState } from './auth.state';

export * from './auth.state';

export interface StoreState {
  auth: AuthState;
}
