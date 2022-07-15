import { IReestr } from '../../../models/IReestr';

export interface ReestrState {
  reesrtData: Array<IReestr>;
  isLoading: boolean;
  error: null | string;
}

export enum ReestrActionEnum {
  REQUEST_REESTR = 'REQUEST_REESTR',
  RECEIVE_REESTR_SUCCESS = 'RECEIVE_REESTR_SUCCESS',
  RECEIVE_REESTR_ERROR = 'RECEIVE_REESTR_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface RequestReestrAction {
  type: ReestrActionEnum.REQUEST_REESTR;
}

export interface RecieveReestrAction {
  type: ReestrActionEnum.RECEIVE_REESTR_SUCCESS;
  payload: Array<any>;
}

export interface RecieveReestrErrorAction {
  type: ReestrActionEnum.RECEIVE_REESTR_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: ReestrActionEnum.SET_IS_LOADING;
  payload: boolean;
}
export type ReestrAction =
  | RequestReestrAction
  | RecieveReestrAction
  | RecieveReestrErrorAction
  | SetIsLoadingAction;
