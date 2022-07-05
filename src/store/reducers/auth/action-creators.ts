import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetErrorLoginAction,
  SetErrorPasswordAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import axios from 'axios';
import dataUsers from '../../../assets/data/users.json';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  setErrorUserName: (payload: string): SetErrorLoginAction => ({
    type: AuthActionEnum.SET_ERROR_LOGIN,
    payload,
  }),
  setErrorPassword: (payload: string): SetErrorPasswordAction => ({
    type: AuthActionEnum.SET_ERROR_PASSWORD,
    payload,
  }),
  login: (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      const response = await axios.get<IUser[]>(dataUsers);
      const user = response.data.find(
        (user) => user.username === username && user.password === password,
      );
      const userLogin = response.data.find((user) => user.username !== username);
      const userPass = response.data.find(
        (user) => user.username === username && user.password !== password,
      );

      if (user) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('username', user.username);
        dispatch(AuthActionCreators.setUser(user));
        dispatch(AuthActionCreators.setIsAuth(true));
      } else if (userPass) {
        dispatch(AuthActionCreators.setErrorPassword('Неправильный пароль'));
      } else if (userLogin) {
        dispatch(AuthActionCreators.setErrorUserName('Неправильный логин'));
        dispatch(AuthActionCreators.setIsLoading(false));
      }
    } catch (err) {
      dispatch(AuthActionCreators.setError(err));
    }
  },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
