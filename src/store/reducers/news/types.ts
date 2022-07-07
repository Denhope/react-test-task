export interface NewsState {
  newsData: Array<any>;
  isLoading: boolean;
  error: null | string;
}

export enum NewsActionEnum {
  REQUEST_NEWS = 'REQUEST_NEWS',
  RECEIVE_NEWS_SUCCESS = 'RECEIVE_NEWS_SUCCESS',
  RECEIVE_NEWS_ERROR = 'RECEIVE_NEWS_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface RequestNewsAction {
  type: NewsActionEnum.REQUEST_NEWS;
}

export interface RecieveNewsrAction {
  type: NewsActionEnum.RECEIVE_NEWS_SUCCESS;
  payload: Array<any>;
}

export interface RecieveNewsErrorAction {
  type: NewsActionEnum.RECEIVE_NEWS_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: NewsActionEnum.SET_IS_LOADING;
  payload: boolean;
}
export type NewsAction =
  | RequestNewsAction
  | RecieveNewsrAction
  | RecieveNewsErrorAction
  | SetIsLoadingAction;
