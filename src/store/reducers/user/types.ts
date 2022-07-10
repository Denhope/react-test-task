import { IUser } from '../../../models/IUser';

export interface UserState {
  userInfo: IUser;
  isLoading: boolean;
  error: null | string;
}

export enum UserActionEnum {
  REQUEST_USER_INFO = 'REQUEST_USER_INFO',
  RECEIVE_USER_INFO_SUCCESS = 'RECEIVE_USER_INFO_SUCCESS',
  RECEIVE_USER_INFO_ERROR = 'RECEIVE_USER_INFO_ERROR',
  SAVE_USER_INFO = 'SAVE_USER_INFO',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface RequestUserInfoAction {
  type: UserActionEnum.REQUEST_USER_INFO;
}

export interface RecieveUserInfoAction {
  type: UserActionEnum.RECEIVE_USER_INFO_SUCCESS;
  payload: IUser;
}

export interface RecieveUserInfoErrorAction {
  type: UserActionEnum.RECEIVE_USER_INFO_ERROR;
  payload: string;
}

export interface SetErrorAction {
  type: UserActionEnum.SET_ERROR;
  payload: string;
}

export interface SaveUserInfoAction {
  type: UserActionEnum.SAVE_USER_INFO;
  payload: IUser;
}
export interface SetIsLoadingAction {
  type: UserActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export type UserAction =
  | SaveUserInfoAction
  | SetErrorAction
  | RecieveUserInfoErrorAction
  | RecieveUserInfoAction
  | SetIsLoadingAction
  | RequestUserInfoAction;
