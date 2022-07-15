import { ReestrAction, ReestrState, ReestrActionEnum } from './types';

const initialState: ReestrState = {
  reesrtData: [],
  isLoading: false,
  error: null,
};

export default function reestrReducer(state = initialState, action: ReestrAction): ReestrState {
  switch (action.type) {
    case ReestrActionEnum.REQUEST_REESTR:
      return {
        reesrtData: [],
        isLoading: true,
        error: null,
      };
    case ReestrActionEnum.RECEIVE_REESTR_SUCCESS:
      return {
        reesrtData: action.payload,
        isLoading: false,
        error: null,
      };
    case ReestrActionEnum.RECEIVE_REESTR_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case ReestrActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
