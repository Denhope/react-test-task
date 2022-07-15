import { IUser } from '../../../models/IUser';

export interface AuthState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
  errorLogin: string;
  errorPassword: string;
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_ERROR_LOGIN = 'SET_ERROR_LOGIN',
  SET_ERROR_PASSWORD = 'SET_ERROR_PASSWORD',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}
export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}
export interface SetErrorLoginAction {
  type: AuthActionEnum.SET_ERROR_LOGIN;
  payload: string;
}
export interface SetErrorPasswordAction {
  type: AuthActionEnum.SET_ERROR_PASSWORD;
  payload: string;
}
export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}
export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetErrorAction
  | SetErrorPasswordAction
  | SetErrorLoginAction
  | SetIsLoadingAction;
