import { UserModel } from '../../models';

export interface UserState {
  users: UserModel[];
  isLoading: boolean;
}

export const initialUserState: UserState = {
  users: [],
  isLoading: false
};

export const getUsers = (state: UserState) => state.users;

export const getUsersIsLoading = (state: UserState) => state.isLoading;
