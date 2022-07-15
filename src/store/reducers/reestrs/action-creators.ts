import { AppDispatch } from '../../index';
import axios from 'axios';
import dataReestr from '../../../assets/data/reestrs.json';
import { RecieveReestrErrorAction, ReestrActionEnum, SetIsLoadingAction } from './types';
import { IReestr } from '../../../models/IReestr';
export const ReestrActioCreators = {
  setIsLoding: (payload: boolean): SetIsLoadingAction => ({
    type: ReestrActionEnum.SET_IS_LOADING,
    payload,
  }),
  setError: (payload: string): RecieveReestrErrorAction => ({
    type: ReestrActionEnum.RECEIVE_REESTR_ERROR,
    payload,
  }),
  featchReestr: () => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ReestrActionEnum.REQUEST_REESTR });
      const response = await axios.get<IReestr[]>(dataReestr);

      setTimeout(() => {
        dispatch({
          type: ReestrActionEnum.RECEIVE_REESTR_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (err) {
      dispatch({ type: ReestrActionEnum.RECEIVE_REESTR_ERROR, payload: err });
    }
  },
};
