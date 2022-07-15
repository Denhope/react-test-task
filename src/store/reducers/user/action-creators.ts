import { SaveUserInfoAction, SetErrorAction, SetIsLoadingAction, UserActionEnum } from './types';
import { IUser } from '../../../models/IUser';

export const UserActionCreators = {
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: UserActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: UserActionEnum.SET_ERROR, payload }),
  saveUserInfo: (user: IUser): SaveUserInfoAction => ({
    type: UserActionEnum.SAVE_USER_INFO,
    payload: user,
  }),
};
