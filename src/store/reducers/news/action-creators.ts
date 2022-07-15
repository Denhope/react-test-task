import { AppDispatch } from '../../index';
import axios from 'axios';
import dataNews from '../../../assets/data/news.json';
import { INewsCard } from '../../../models/INewsCard';
import { NewsActionEnum, RecieveNewsErrorAction, SetIsLoadingAction } from './types';

export const NewsActionCreators = {
  setIsLoding: (payload: boolean): SetIsLoadingAction => ({
    type: NewsActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): RecieveNewsErrorAction => ({
    type: NewsActionEnum.RECEIVE_NEWS_ERROR,
    payload,
  }),
  featchNews: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: NewsActionEnum.REQUEST_NEWS });
      const response = await axios.get<[INewsCard]>(dataNews);

      setTimeout(() => {
        dispatch({
          type: NewsActionEnum.RECEIVE_NEWS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err) {
      dispatch({ type: NewsActionEnum.RECEIVE_NEWS_ERROR, payload: err });
    }
  },
};
