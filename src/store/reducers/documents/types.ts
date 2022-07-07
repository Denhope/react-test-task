import { IDocs } from '../../../models/IDocs';

export interface DocsState {
  docsData: Array<IDocs>;
  isLoading: boolean;
  error: null | string;
}

export enum DocsActionEnum {
  REQUEST_DOCS = 'REQUEST_DOCS',
  RECEIVE_DOCS_SUCCESS = 'RECEIVE_DOCS_SUCCESS',
  RECEIVE_DOCS_ERROR = 'RECEIVE_DOCS_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface RequestDocsAction {
  type: DocsActionEnum.REQUEST_DOCS;
}

export interface RecieveDocsAction {
  type: DocsActionEnum.RECEIVE_DOCS_SUCCESS;
  payload: Array<IDocs>;
}

export interface RecieveDocsErrorAction {
  type: DocsActionEnum.RECEIVE_DOCS_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: DocsActionEnum.SET_IS_LOADING;
  payload: boolean;
}
export type DocsAction =
  | RequestDocsAction
  | RecieveDocsAction
  | RecieveDocsErrorAction
  | SetIsLoadingAction;
