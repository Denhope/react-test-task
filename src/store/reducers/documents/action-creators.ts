import { AppDispatch } from '../../index';
import axios from 'axios';
import dataReestr from '../../../assets/data/reestrs.json';
import { SetIsLoadingAction, DocsActionEnum, RecieveDocsErrorAction } from './types';
import { IReestr } from '../../../models/IReestr';
import { IDocs } from '../../../models/IDocs';
export const DocsActionCreators = {
  setIsLoding: (payload: boolean): SetIsLoadingAction => ({
    type: DocsActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): RecieveDocsErrorAction => ({
    type: DocsActionEnum.RECEIVE_DOCS_ERROR,
    payload,
  }),
  featchDocs: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DocsActionEnum.REQUEST_DOCS });
      const response = await axios.get<IDocs[]>('dataReestr');

      setTimeout(() => {
        dispatch({
          type: DocsActionEnum.RECEIVE_DOCS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err) {
      dispatch({ type: DocsActionEnum.RECEIVE_DOCS_ERROR, payload: err });
    }
  },
};
