import { AuthState } from './auth.state';
import { AlertState } from './alert.state';

export * from './auth.state';
export * from './alert.state';

export interface StoreState {
  auth: AuthState;
  alert: AlertState;
}
