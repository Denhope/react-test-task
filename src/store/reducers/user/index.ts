import { IUser } from '../../../models/IUser';
import { UserAction, UserActionEnum, UserState } from './types';

const initialState: UserState = {
  userInfo: {
    firstname: '',
    lastname: '',
    password: '',
    username: '',
    city: '',
    country: '',
    midlename: '',
    photoUrl: '',
    telephone: '',
  },
  isLoading: false,
  error: null,
};

export default function userReducer(state = initialState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionEnum.REQUEST_USER_INFO:
      return {
        userInfo: {} as IUser,
        isLoading: true,
        error: null,
      };
    case UserActionEnum.RECEIVE_USER_INFO_SUCCESS:
      return {
        userInfo: action.payload,
        isLoading: false,
        error: null,
      };
    case UserActionEnum.RECEIVE_USER_INFO_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case UserActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case UserActionEnum.SAVE_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}
