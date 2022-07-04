import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import axios from 'axios';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<IUser[]>('./users.json');
      const user = response.data.find(
        (user) => user.username === username && user.password === password,
      );
      if (user) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', user.username);
        dispatch(AuthActionCreators.setUser(user));
        dispatch(AuthActionCreators.setIsAuth(true));
      } else {
        dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
      }
      dispatch(AuthActionCreators.setIsLoading(false));
    } catch (err) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
