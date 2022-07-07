import { NewsAction, NewsActionEnum, NewsState } from './types';

const initialState: NewsState = {
  newsData: [],
  isLoading: false,
  error: null,
};

export default function newsReducer(state = initialState, action: NewsAction): NewsState {
  switch (action.type) {
    case NewsActionEnum.REQUEST_NEWS:
      return {
        newsData: [],
        isLoading: true,
        error: null,
      };
    case NewsActionEnum.RECEIVE_NEWS_SUCCESS:
      return {
        newsData: action.payload,
        isLoading: false,
        error: null,
      };
    case NewsActionEnum.RECEIVE_NEWS_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case NewsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
